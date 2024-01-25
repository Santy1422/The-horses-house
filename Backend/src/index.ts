import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import { globalLimit } from './utils/rate-limiters';
import treblle from '@treblle/express';
import mongoose from 'mongoose';
import { updateEventStatus } from './databases/mongodb/schemas/FuncionesCron/updateEventStatus';
import Horse from './databases/mongodb/schemas/horseSchema';
import axios from 'axios';
import cheerio from 'cheerio';
import cors from 'cors';
import cron from 'node-cron';
import { MONGO_URI, PORT } from './config/env';
import horseSchema from './databases/mongodb/schemas/horseSchema';
import Fotografos from './databases/mongodb/schemas/fotografosSchema';

// SERVER INSTANCE
const server = express();

server.set('trust proxy', false); // POR AWS EC2 NGINX PROXY REDIRECT, sino limita todas las tu sabes

// MIDDLEWARES
server.use(morgan('dev'));
server.use(cors({ origin: '*' }));

server.use(globalLimit); // límite 150 peticiones por 1 minuto
server.use('/', express.json({ limit: '50mb' })); // para recibir body's
server.use('/', bodyParser.urlencoded({ extended: true })); // para poder enviar array dentro de body's
server.use(express.static('public'));

server.use(
  treblle({
    apiKey: 'akfAkvQ69Q4EHtBYhFb9DZ4gMvw62NWi',
    projectId: 'u7IkiAunbCHQZ223',
    additionalFieldsToMask: [],
  })
);




server.use(routes);
const limpiarTexto = (texto) => {
  return texto.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
};
const LookingHorse = async () => {
  try {
    for (let aafe = 550417; aafe <= 559394; aafe++) { // Cambia los números según tus necesidades.
      const url = `https://www.fomentoequino.net/nv_pedigrees_ver_old.php?aafe=${aafe}`;
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      console.log(aafe);

      const nombreCaballo = limpiarTexto($('#historial > table').eq(0).find('b').first().text());
      let detallesCaballo = { nombre: nombreCaballo };
      $('#historial > table').eq(1).find('tr').each((_, element) => {
        const tds = $(element).find('td');
        if (tds.length === 4) {
          const clave = limpiarTexto($(tds[0]).text());
          const valor = limpiarTexto($(tds[1]).text());
          detallesCaballo[clave] = valor;
        }
      });
      const horseData = {
        name: detallesCaballo.nombre || " ",
        pedigreePic: `https://www.fomentoequino.net/pedigrees/pdf_p1/pdf_p1.php?aafe_buscado=${aafe}`,
        aaef: detallesCaballo["AAFE"] || "",
        Microchip: detallesCaballo["Microchip"] || "",
        tipoSangre: detallesCaballo["Tip.Sang"] || "",
        criador: detallesCaballo["Criador"] || "",
        UELN: detallesCaballo["NroUELN"] || "",
        RP: detallesCaballo["RP"] || ""
      };

      const newHorse = new horseSchema(horseData);
      await newHorse.save();

      // Espera 3 segundos antes de la próxima petición.
    }

    return "Finalizado";
  } catch (err) {
    console.error(err);
    return "Error";
  }
};

// Función para pausar la ejecución durante un cierto tiempo en milisegundos.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Programa el cron job para que se ejecute todos los días a las 12:00 PM.
cron.schedule('0 * * * *', () => {
  console.log('Ejecutando tarea cron para actualizar el estado de las inscripciones de eventos');
  updateEventStatus();
});

// Inicia la conexión a la base de datos y luego ejecuta la función caballos.
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to the database.');
      //  LookingHorse()
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('An error occurred during initialization:', error);
  process.exit(1);
});

// EXPRESS DEFAULT ERROR HANDLER
server.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  let message_to_send = 'API: ' + err.message;
  console.error(message_to_send);
  res.status(err.statusCode || 500).send({
    error: true,
    message: message_to_send,
  });
});

// START LISTENING
server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}!`);
});