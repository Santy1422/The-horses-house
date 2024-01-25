import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const pruebasSchema = new mongoose.Schema({
  inscriptos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Inscriptos',
    },
  ],
  clasificados: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Inscriptos',
    },
  ],
  recorridos: Array,
  nombre: String,
  tipoPrueba: String,
  categoria: Array,
  altura: String,
  definicion: String,
  codigoClasificacion: String,
  dia: Date,
  hora: String,
  articulo: String,
  arancelInscripcion: Number,
  tiempoAcordadoR1: {
    type: Number,
    default: 0
  },
  VallasR1: {
    type: Number,
    default: 0
  },
  VallasR2: {
    type: Number,
    default: 0
  },
  tiempoAcordadoR2: {
    type: Number,
    default: 0
  },
  tiempoOptimo: {
    type: Number,
    default: 0
  },
  corralDobleR1: {
    type: Number,
    default: 0
  },
  corralTripleR1: {
    type: Number,
    default: 0
  },  
  corralDobleR2: {
    type: Number,
    default: 0
  },
  corralTripleR2: {
    type: Number,
    default: 0
  },  
  premios: {
    type: Array
  },
  pista: {
    type: String,
    default: "0"
  },

  observaciones: String,

});
pruebasSchema.plugin(toJSON);
const Pruebas = mongoose.model('Pruebas', pruebasSchema);

export default Pruebas
