

import inscriptosSchema from "../databases/mongodb/schemas/inscriptosSchema"

const pdfparse = require('pdf-parse'); 
import OpenAI from 'openai';
import mongoose from "mongoose";
import Pruebas from "../databases/mongodb/schemas/pruebasSchema";
import { io } from "socket.io-client";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY 
});


const socket = io('https://the-horses-house-production.up.railway.app/'); 
//const socket = io('http://localhost:8083'); 


const ponerResultados = async (req, res) => {
  console.log(req.body)  
  const inscriptoID = req.body.InscriptoId  
// let inscriptoId = req.body.inscriptoId.toString()
  const inscripto = await inscriptosSchema.findById(req.body.InscriptoId);
    
  if (!inscripto)   return res.status(404).json({ error: 'Inscripto no encontrado' });
  
  inscripto.vallas = req.body.vallas 
  inscripto.vallas2 = req.body.vallas2 

  inscripto.faltas = req.body.vallas.length   
  inscripto.faltas2 = req.body.vallas2.length 
  inscripto.tiempo = req.body.tiempo
  inscripto.tiempo2  = req.body.tiempo2 
  inscripto.tiempoAcordado  = req.body.tiempoAcordado 
  inscripto.tiempoAcordado2  = req.body.tiempoAcordado2 
  inscripto.estadoCompeticion = req.body.estadoCompeticion
  console.log(inscripto)
  await inscripto.save()
  
  socket.emit('actualizarResultado', {inscriptoId: inscriptoID});

 return res.status(200).json( inscripto)
};


const enviarInscriptos = async (req, res) => {
    try {
        const pruebas = await Pruebas.findById(req.params.pruebaID)
            .populate({
                path: 'inscriptos',
                model: 'Inscriptos',
            });

        res.status(200).send(pruebas);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los inscriptos');
    }
};
const enviarClasificados = async(req, res) => {
    const {pruebaId, categoriaNombre, definicion} = req.body
    const campos = 'Jinete jineteLastName, definicion, estadoCompeticion, clubRepresenta puntuacion faltas faltas2 tiempo tiempo2 tiempoOtimo nombreDelCaballo posicion';

    // Obtener los inscriptos con los campos especificados
    const inscriptos = await inscriptosSchema.find({
        pruebaId: new mongoose.Types.ObjectId(pruebaId),
        categoria: categoriaNombre,
    }).select(campos);
    const inscriptosClasificados = clasificarPorFase(inscriptos, definicion);
    // Emitir los resultados clasificados
    res.status(200).send(inscriptosClasificados) 
} 


const controller = {

    ponerResultados,
    enviarInscriptos,
    enviarClasificados
}


export default controller



function clasificarPorFase(inscriptos, definicion) {
    switch (definicion) {
        case "2 Fases":
            return inscriptos.sort((a, b) => {
                if (a.faltas === 0 && a.tiempo === 0) return 1;
                if (b.faltas === 0 && b.tiempo === 0) return -1;
                return (a.faltas - b.faltas) || (a.tiempo2 - b.tiempo2);
            });
        case "2F Esp":
            return inscriptos.sort((a, b) => {
                if (a.faltas === 0 && a.tiempo === 0) return 1;
                if (b.faltas === 0 && b.tiempo === 0) return -1;
                return (a.faltas - b.faltas) || (a.tiempo2 - b.tiempo2);
            });
        case "1D":
            return inscriptos.sort((a, b) => {
                if (a.faltas === 0 && a.tiempo === 0) return 1;
                if (b.faltas === 0 && b.tiempo === 0) return -1;
                return (a.faltas - b.faltas) || (a.tiempo - b.tiempo);
            });
            case "DR":
              return inscriptos.sort((a, b) => {
                  if (a.faltas === 0 && b.faltas === 0) return 0;
          
                  if (a.faltas === 0) return 1;
              if (b.faltas === 0) return -1;
          
                  return b.faltas - a.faltas;
              });
        case "TOD":
            return inscriptos.sort((a, b) => {
                if (a.tiempo === 0) return 1;
                if (b.tiempo === 0) return -1;
                return Math.abs(a.tiempo - a.tiempoOtimo) - Math.abs(b.tiempo - b.tiempoOtimo);
            });
        case "TD":
            return inscriptos.sort((a, b) => {
                if (a.faltas === 0 && a.tiempo === 0) return 1;
                if (b.faltas === 0 && b.tiempo === 0) return -1;
                return (a.faltas - b.faltas) || (a.tiempo - b.tiempo);
            });
        default:
            return inscriptos;
    }
}