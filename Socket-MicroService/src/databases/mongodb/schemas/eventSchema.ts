import mongoose, { Schema } from 'mongoose'; // Importa Schema desde mongoose
import { toJSON } from './plugins';


const eventSchema = new mongoose.Schema(
  {    categorias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pruebas', 
    },
  ],
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  profesional: {
    type: Schema.Types.ObjectId,
    ref: 'Professional',
    required: true,
  },
  premios: {
    type: Schema.Types.ObjectId,
    ref: 'Premios',
  },
    creadorId: String,
    nombreEvento: String,
    clubesPatrocinadores: [String],
    tipoDeConcurso: String, 
    fechaInicio: Date,
    horaInicio: String,
    fechaFinalizacion: Date,
    HoraFinalizacion: String,
    fechaInicioInscripcion: Date,
    horaInicioInscripcion: String,
    fechaFinInscripcion: Date,
    horaFinInscripcion: String,
    tipoConcurso: String,
    ubicacion: String,
    descripcionEvento: String,
    autoridadesConcurso: Array,
    estado: {
      type: String,
      enum: ["Pendiente", "Progreso", "Pasado"]
    },
    estadoEvento: {
      type: String,
      // enum: ['publicado', 'borrador', "postergado", "eliminado"],
    },  
    inscripciones: {
      type: Boolean
    },
    emailContacto: {
      type: String,
    },

  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

eventSchema.plugin(toJSON);
const Event = mongoose.model('Event', eventSchema);


export default Event;