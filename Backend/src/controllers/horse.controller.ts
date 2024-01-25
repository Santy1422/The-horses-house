
import response from "../utils/response";

import horseSchema from "../databases/mongodb/schemas/horseSchema"

import usersSchema from "../databases/mongodb/schemas/usersSchema"
import axios from "axios"
import * as cheerio from 'cheerio';
import OpenAI from 'openai';
import { uploadPhoto, uploadPhotoFromBuffer } from "../helpers/udploadImagetoAWS"
import fs from 'fs'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});


const searchHorse = async (req, res) => {
  const { name } = req.params;
  const fixedName = name.replace(/\+/g, ' ');

  console.log(fixedName);

  try {
    const response = await axios.get(`https://federados.federacionecuestre.com.ar/index.php?nombre=${name}&busqueda=1&tipo=c&disciplina=0&porclub=Todos`);

    const $ = cheerio.load(response.data);

    // Extraer datos del caballo
    console.log($)
    const horseData = {
      name: $('#mytable tr:nth-child(2) td:nth-child(1)').text().trim(),
      license: $('#mytable tr:nth-child(2) td:nth-child(2)').text().trim(),
      gender: $('#mytable tr:nth-child(2) td:nth-child(3)').text().trim(),
      color: $('#mytable tr:nth-child(2) td:nth-child(4)').text().trim(),
      birthYear: $('#mytable tr:nth-child(2) td:nth-child(5)').text().trim(),
      discipline: $('#mytable tr:nth-child(2) td:nth-child(6)').text().trim(),
      category: $('#mytable tr:nth-child(2) td:nth-child(7)').text().trim(),
      club: $('#mytable tr:nth-child(2) td:nth-child(8)').text().trim(),
    };

    res.status(200).send(JSON.stringify(horseData));
    // Aquí puedes enviar el objeto JSON como respuesta
  } catch (error) {
    console.error(error);
    response(res, 500, 'Error en la solicitud');
  }
};

const newHorse = async (req, res) => {
  const {
    name,
    breed,
    jockey,
    racingStats,
    aaef,
    gender,
    birthDate,
    pedigreePic,
    horsePic,
    alturaSalto,
    informacionAdicional,
    horseServicios,
  } = req.body.newHorse
  // Verificar si ya existe un caballo con el mismo nombre
  const existingHorse = await horseSchema.findOne({ name });

  if (existingHorse) {
    return res.status(404).json({ error: 'Ya existe un caballo con este nombre', payload: true });
  }

  // Crear caballo
  const horse = new horseSchema({
    owner: req.user.id,
    name,
    breed,
    jockey,
    racingStats,
    aaef,
    gender,
    birthDate,
    pedigreePic,
    horsePic,
    alturaSalto,
    informacionAdicional: {
      sanidad: informacionAdicional.sanidad || null,
      patea: informacionAdicional.patea || null,
      muerde: informacionAdicional.muerde || null,
      manso: informacionAdicional.manso || null,
      microchip: informacionAdicional.microchip || null,
    },
  });

  await horse.save();

  let searchUser = await usersSchema.findById(req.user.id);
  searchUser.horses.push(horse._id);
  await searchUser.save();

  let response = await horseSchema.find({ owner: req.user.id });
  res.status(201).json(JSON.stringify(response));
};

const myHorse = async (req, res) => {

  //req.user = { id: "6530365b5c114dc0325eb732" }; // id de usuario registrado, para probar la ruta, sacar y activar el token

  const horse = await horseSchema.find({ owner: req.user.id })
  console.log(horse)
  res.status(200).send(horse)

};

const findHorseById = async (req, res) => {

  const horseId = req.params.id;

  const horse = await horseSchema.findById(horseId);
  res.status(200).send(horse)

};


const deleteHorseById = async (req, res) => {

  const horseId = req.params.id;

  const horse = await horseSchema.findById(horseId);
  if (!horse) {
    return res.status(404).json({ error: 'Caballo no encontrado' });
  };
  await horse.remove();
  res.status(200).json({ message: 'Caballo eliminado con éxito' });

};

const editHorse = async (req, res) => {

  //req.user = { id: "6530365b5c114dc0325eb732" }; // id de usuario registrado, para probar la ruta, sacar y activar el token
  const {
    name,
    breed,
    jockey,
    racingStats,
    aaef,
    gender,
    birthDate,
    pedigreePic,
    horsePic,
    alturaSalto,
    informacionAdicional,
    horseServicios,
  } = req?.body?.horseData
  
  const horseId = req.params.id;
  const newData = {
    owner: req.user.id,
    name,
    breed,
    jockey,
    racingStats,
    aaef,
    gender,
    birthDate,
    pedigreePic,
    horsePic,
    alturaSalto,
    informacionAdicional: {
      sanidad: informacionAdicional.sanidad || null,
      patea: informacionAdicional.patea || null,
      muerde: informacionAdicional.muerde || null,
      manso: informacionAdicional.manso || null,
      microchip: informacionAdicional.microchip || null,
    },
  }

  const queryCondition = { _id: horseId, owner: req.user.id };
  const updatedHorse = await horseSchema.findOneAndUpdate(queryCondition, newData, { new: true });

  let response = await horseSchema.find({ owner: req.user.id });

  res.status(200).json(response)

};

// Función para limpiar el texto extraído

const limpiarTexto = (texto) => {
  return texto.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
};

// function procesarArbolGenealogico($, nombreCaballo) {
//   const arbolGenealogico = {};

//   const tablaArbol = $('div.table-responsive table');

//   tablaArbol.find('tr').each((index, row) => {
//     const tds = $(row).find('td');
//     if (index % 2 === 0 && tds.length > 0) {  // Filas pares para los padres
//       let nombrePrincipal = limpiarTexto($(tds[0]).text());
//       arbolGenealogico[nombrePrincipal] = { Padres: {}, Madres: {} };

//       for (let i = 1; i < tds.length; i += 2) {
//         let nombrePadre = limpiarTexto($(tds[i]).text());
//         let nombreMadre = i + 1 < tds.length ? limpiarTexto($(tds[i + 1]).text()) : "";

//         if (nombrePadre) {
//           arbolGenealogico[nombrePrincipal].Padres[nombrePadre] = {};
//         }
//         if (nombreMadre) {
//           arbolGenealogico[nombrePrincipal].Madres[nombreMadre] = {};
//         }
//       }
//     }
//   });

//   return arbolGenealogico;
// }


// Endpoint para buscar los detalles y el árbol genealógico de un caballo
// const SarchHorses = async (req, res) => {
//   try {
//     const aafe = req.params.aafe;
//     if (!aafe) {
//       return res.status(400).send({ error: "Se requiere el parámetro AAFE" });
//     }

//     const url = `https://www.fomentoequino.net/nv_pedigrees_ver_old.php?aafe=${aafe}`;
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const nombreCaballo = limpiarTexto($('#historial > table').eq(0).find('b').first().text());
//     let detallesCaballo = { nombre: nombreCaballo };
//     $('#historial > table').eq(1).find('tr').each((_, element) => {
//       const tds = $(element).find('td');
//       if (tds.length === 4) {
//         const clave = limpiarTexto($(tds[0]).text());
//         const valor = limpiarTexto($(tds[1]).text());
//         detallesCaballo[clave] = valor;
//       }
//     });
//     new Horse({
//       name: detallesCaballo.nombre && detallesCaballo.nombre || "",
//       pedigreePic: "https://www.fomentoequino.net/pedigrees/pdf_p1/pdf_p1.php?aafe_buscado=${aafe}"|| "",
//       aaef: detallesCaballo.AAFE  && detallesCaballo.AAFE || "",
//       Microchip: detallesCaballo.Microchip && detallesCaballo.Microchip || "",
//       tipoSangre: detallesCaballo.Tip.Sang && detallesCaballo.Tip.Sang || "",
//       criador: detallesCaballo.Criador && detallesCaballo.Criador || "",
//       UELN:detallesCaballo.UELN && detallesCaballo.UELN || "",
//       RP: detallesCaballo.RP &&detallesCaballo.RP || "",

//     })

//     res.json({ detalles: detallesCaballo, pedigre:` https://www.fomentoequino.net/pedigrees/pdf_p1/pdf_p1.php?aafe_buscado=${aafe}` });
//   } catch (error) {
//     console.error('Error en el scraping:', error);
//     res.status(500).send({ error: "Error al procesar la solicitud" });
//   }


const LookingHorse = async (req, res) => {




  for (let aafe = req.params.aafeInicio; aafe <= 530500; aafe++) {
    const url = `https://www.fomentoequino.net/nv_pedigrees_ver_old.php?aafe=${aafe}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

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
      name: detallesCaballo.nombre || "",
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
  }

  res.json({ message: "Procesamiento completado" });

};

// Buscador de caballo para agregar al usuario

const SearchHorseByName = async (req, res) => {
  const horseName = req.params.horseName

  const regex = new RegExp(horseName, 'i')

  const horses = await horseSchema.find({ name: { $regex: regex } }).select("name")

  if (horses.length === 0) {
    return res.status(404).json({ error: 'Caballo no encontrado' });
  }

  res.status(200).json(horses);
}

const SelectHorseById = async (req, res) => {
  const horseId = req.params.horseId;
  // Find horse by ID
  let horse = await horseSchema.findById(horseId);

  if (!horse) {
    return res.status(404).json({ error: 'Horse not found' });
  }

//   const pdfUrl = horse.pedigreePic;
//   const pdfResponse = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
//   const pdfData = Buffer.from(pdfResponse.data, 'binary');
//   console.log(pdfData)
//   const pdfBlob = new Blob([pdfData], { type: 'application/pdf' });
//   const formData = new FormData();
//   formData.append('inputFile', pdfBlob, 'file.pdf');

//   const cloudmersiveResponse = await axios.post('https://api.cloudmersive.com/convert/pdf/to/png', formData, {
//     headers: {
//       'Apikey': '1bfa8979-b66e-4598-87a2-47616eda00ec',
//       'Content-Type': 'multipart/form-data',
//     },
//     responseType: 'arraybuffer',
//   });
//   const jsonData = JSON.parse(cloudmersiveResponse.data.toString('utf8'));

// // console.log(jsonData);
//   const buffer = Buffer.from(cloudmersiveResponse.data, 'binary'); 

//   const pedigreeUrl = await uploadPhotoFromBuffer(buffer);

//   horse.pedigreePic = pedigreeUrl;

  res.status(200).json(horse);
}

const ClaimHorse = async (req, res) => {
  const horseId = req.params.horseId
  const userId = req.user.id
  const {
    breed,
    gender,
    birthDate,
    horsePic,
    alturaSalto,
    informacionAdicional,
  } = req.body.horseData

  const horse = await horseSchema.findOneAndUpdate(
    { _id: horseId },
    {
      owner: userId,
      breed,
      gender,
      birthDate,
      horsePic,
      alturaSalto,
      informacionAdicional: {
        sanidad: informacionAdicional.sanidad || null,
        patea: informacionAdicional.patea || null,
        muerde: informacionAdicional.muerde || null,
        manso: informacionAdicional.manso || null,
        microchip: informacionAdicional.microchip || null,
      }
    })

  res.status(201).json(horse)
}

const uploadHorsePic = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: 'La imagen no llego.' });
  }

  
  const horsePic = await uploadPhoto(req.files[0]);

  if (horsePic) {
    return res.status(201).json({url: horsePic})
  }
}

// No olvides exportar la función si estás usando un framework como Express
const controller = {
  searchHorse,
  newHorse,
  myHorse,
  findHorseById,
  deleteHorseById,
  editHorse,
  LookingHorse,
  SearchHorseByName,
  SelectHorseById,
  ClaimHorse,
  uploadHorsePic
}


export default controller
