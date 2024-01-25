
import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const premiosSchema = new mongoose.Schema({


  tipo: {
    type: String,
    enum:["Cucardas", "Talabarteria", "Productos para el caballo", "Monetario", "Otro"]
  },
  categorias: {
    type: String
  }
});
const Premios = mongoose.model('Premios', premiosSchema);

export default Premios;