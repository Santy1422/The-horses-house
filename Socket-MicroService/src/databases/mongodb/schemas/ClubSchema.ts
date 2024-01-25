
import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const ClubSchema = new mongoose.Schema({

    empleados: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
      socios: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  nombre: String,
  pais: String,
  provincia: Array,
  federado: Boolean,
});
ClubSchema.plugin(toJSON);

const Club = mongoose.model('Club', ClubSchema);

export default Club;