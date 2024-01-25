import { MONGO_URI, PORT, PORTSOCKET } from "./config/env";
import mongoose from "mongoose";
import express from "express";
import http from "http";
// import socketIo from "socket.io";
import Pruebas from "./databases/mongodb/schemas/pruebasSchema";
import Inscriptos from "./databases/mongodb/schemas/inscriptosSchema";
import inscriptosSchema from "./databases/mongodb/schemas/inscriptosSchema";
const bodyParser = require('body-parser');




const app = express();
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server, {
  cors: { origin: "*" },
  methods: ["GET", "POST"],
});


app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
// Función para conectar a la base de datos
async function connectToDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Conectado a la base de datos.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1);
  }
}

io.on('connection', async socket => {
  socket.on("test", () => {
    console.log("hola")
  });



  //ENVIARLE LA LISTA DE INSCRIPTOS A EL FRONT PARA PONER RESULTADOS
  // socket.on('recibir-inscriptos', async ({ categoriaId }) => {
  //   console.log(`${categoriaId}`);
  //   try {
	// 	const pruebas = await Pruebas.findById(new mongoose.Types.ObjectId(categoriaId));
	// 	const categoriasConInscriptos = await Promise.all(pruebas.inscriptos.map(async (categoria) => {
	// 	  if (categoria && pruebas.inscriptos) {
	// 		const inscriptos = await Promise.all(
	// 			pruebas.inscriptos.map(inscriptoId => 
	// 			Inscriptos.findById(inscriptoId)
	// 		  )
	// 		);
	// 		return { ...pruebas.toObject(), inscriptos };
	// 	  } else {
	// 		return { ...pruebas.toObject(), inscriptos: [] };
	// 	  }
	// 	}));
	  
	//   io.emit('message-received', categoriasConInscriptos);
  //   } catch (error) {
  //     console.error(`Error al recibir inscriptos para categoriaId ${categoriaId}: `, error);
  //   }
  // });
  //ENVIARLE LA LISTA DE INSCRIPTOS A EL FRONT PARA PONER RESULTADOS



  //ACTUALIZARLE LOS RESULTADOS A CADA UNO
//   socket.on('Resultados', async ({ categoriaId, InscriptoId, faltas, faltas2, PEncontra, tiempo, tiempo2, estadoCompeticion }) => {
//     try {
//       console.log(InscriptoId, faltas, faltas2, PEncontra, tiempo, tiempo2);

//       const updateResult = await inscriptosSchema.findById(new mongoose.Types.ObjectId(InscriptoId));
//       updateResult.faltas = faltas;
//       updateResult.faltas2 = faltas2
//       updateResult.PEncontra = PEncontra
//       updateResult.tiempo = tiempo
//       updateResult.tiempo2 = tiempo2 && tiempo2 || 0;

//       updateResult.estadoCompeticion = "Finalizado";

//       await updateResult.save();

//       let pruebaId = updateResult.pruebaId;
//       let categoria = updateResult.categoria;
// console.log("okey")
//       // Emitir los resultados por categoría
//       socket.emit('ResultadosPorCategoria', { pruebaId: pruebaId, categoriaNombre: categoria });

//     } catch (error) {
//       console.error(`Error al actualizar resultados para InscriptoId ${InscriptoId}: `, error);
//     }
  // });
  //ACTUALIZARLE LOS RESULTADOS A CADA UNO








  //ENVIAR RESULTADOS FILTRADOS POR CATEGORIA A MOBILE
//   socket.on('ResultadosPorCategoria', async ({ pruebaId, categoriaNombre, definicion }) => {
//     try {
//         const campos = 'Jinete jineteLastName, definicion, estadoCompeticion, clubRepresenta puntuacion faltas faltas2 tiempo tiempo2 tiempoOtimo nombreDelCaballo posicion';

//         // Obtener los inscriptos con los campos especificados
//         const inscriptos = await inscriptosSchema.find({
//             pruebaId: new mongoose.Types.ObjectId(pruebaId),
//             categoria: categoriaNombre,
//         }).select(campos);
//         function clasificarPorFase(inscriptos, definicion) {
//           switch (definicion) {
//               case "2 Fases":
//                   return inscriptos.sort((a, b) => {
//                       if (a.faltas === 0 && a.tiempo === 0) return 1;
//                       if (b.faltas === 0 && b.tiempo === 0) return -1;
//                       return (a.faltas - b.faltas) || (a.tiempo2 - b.tiempo2);
//                   });
//               case "2F Esp":
//                   return inscriptos.sort((a, b) => {
//                       if (a.faltas === 0 && a.tiempo === 0) return 1;
//                       if (b.faltas === 0 && b.tiempo === 0) return -1;
//                       return (a.faltas - b.faltas) || (a.tiempo2 - b.tiempo2);
//                   });
//               case "1D":
//                   return inscriptos.sort((a, b) => {
//                       if (a.faltas === 0 && a.tiempo === 0) return 1;
//                       if (b.faltas === 0 && b.tiempo === 0) return -1;
//                       return (a.faltas - b.faltas) || (a.tiempo - b.tiempo);
//                   });
//                   case "DR":
//                     return inscriptos.sort((a, b) => {
//                         // Si ambos no han competido (faltas = 0), los deja en el mismo orden
//                         if (a.faltas === 0 && b.faltas === 0) return 0;
                
//                         // Si 'a' no ha competido, lo coloca después
//                         if (a.faltas === 0) return 1;
                
//                         // Si 'b' no ha competido, lo coloca después
//                         if (b.faltas === 0) return -1;
                
//                         // Si ambos han competido, ordena de mayor a menor faltas
//                         return b.faltas - a.faltas;
//                     });
//               case "TOD":
//                   return inscriptos.sort((a, b) => {
//                       if (a.tiempo === 0) return 1;
//                       if (b.tiempo === 0) return -1;
//                       return Math.abs(a.tiempo - a.tiempoOtimo) - Math.abs(b.tiempo - b.tiempoOtimo);
//                   });
//               case "TD":
//                   return inscriptos.sort((a, b) => {
//                       if (a.faltas === 0 && a.tiempo === 0) return 1;
//                       if (b.faltas === 0 && b.tiempo === 0) return -1;
//                       return (a.faltas - b.faltas) || (a.tiempo - b.tiempo);
//                   });
//               default:
//                   return inscriptos;
//           }
//       }
//         // Clasificar los inscriptos según el tipo de prueba
//         const inscriptosClasificados = clasificarPorFase(inscriptos, definicion);
//         // Emitir los resultados clasificados
//         io.emit('resultados-filtrados', inscriptosClasificados);
//     } catch (error) {
//         console.error(`Error al recibir inscriptos para pruebaId ${pruebaId} y categoria ${categoriaNombre}: `, error);
//     }
// });

socket.on('actualizarResultado', async (data) => {
  
  try {
    
    let inscripto = await inscriptosSchema.findOne({ _id: data.inscriptoId })
    io.emit('Resultadoactualizado', {inscripto});
    console.log(inscripto)

  } catch (error) {
    console.error("Error al recibir inscriptos para pruebaId", error);
  }
});


socket.on('ActualizarEstado', async ({ inscriptoId, estado }) => {
  try {

    let inscripto = await inscriptosSchema.findOne({ _id: inscriptoId });
    inscripto.estadoCompeticion = estado
    await inscripto.save()

    io.emit('Inscripto actualizado');
    
  } catch (error) {
    console.error("Error al recibir inscriptos para pruebaId", error);
  }
});


//AGREGARLES TIEMPO OPTIMO
socket.on('TiempoAcordado', async ({ pruebaId, tiempoOtimo }) => {
  try {
    console.log(pruebaId, tiempoOtimo);

    let searchPrueba = await Pruebas.findOne({ _id: pruebaId });
    if (!searchPrueba) {
      console.log("La prueba no existe");
      return; 
    }

    await inscriptosSchema.updateMany(
      { _id: { $in: searchPrueba.inscriptos } },
      { $set: { tiempoOtimo: tiempoOtimo } }
    );

    io.emit('Tiempo optimo actualizado');
    
  } catch (error) {
    console.error("Error al recibir inscriptos para pruebaId", error);
  }
});
//AGREGARLES TIEMPO OPTIMO





  socket.on('disconnect', reason => {
    console.log(`[${socket.id}] socket disconnected - ${reason}`);
  });
});

// Manejador de errores del servidor HTTP
server.on("error", (error) => {
  console.error("Error al iniciar el servidor:", error);
});

// Iniciar el servidor HTTP y conectar a la base de datos
async function startServer() {
  try {
    await connectToDatabase();
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
}

// Iniciar el servidor
startServer();
