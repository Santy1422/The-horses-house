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
  nombre: String,
  tipoPrueba: String,
  categoria: Array,
  altura: String,
  definicion: String,
  caballos: [String],
  codigoClasificacion: String,
  dia: Date,
  hora: String,
  articulo: String,
  arancelInscripcion: Number,
  tiempoAcordado: String,
  premio:{
    tipo: {
      type: Schema.Types.ObjectId,
      ref: 'Premios',
    },
    monto:{
      primero: String,
      segundo: String,
      tercero: String,
      cuarto: String,
      quinto: String,
    }
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
