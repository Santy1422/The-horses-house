import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const fotografosSchema = new mongoose.Schema(
  {
    fotografoId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    pagos: [{
      type: Schema.Types.ObjectId,
      ref: 'Payment',
    }],
    clientes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Inscriptos',
      },
    ],
    evento:{
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
    fotos:{
        type: Array
    },

    videos: {
      type: Array
  }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

fotografosSchema.plugin(toJSON);
const Fotografos = mongoose.model('Fotografos', fotografosSchema);
export default Fotografos;
