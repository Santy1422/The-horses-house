import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const inscriptosSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    pagoId: {
      type: Schema.Types.ObjectId,
      ref: 'Payment',
    },
    caballoInscritos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Horse',
      },
    ],
    pruebaId:{
      type: Schema.Types.ObjectId,
      ref: 'Prueba',
    },
    definicion: {
      type: String
    },
    categoria: {
      type: String,
    },
    tipodePago: {
      type: String,
      default: "indefinido"
    },
    estadoDePago: {
      type:  String,
    default: "indefinido"
  },
    Jinete:  {
      type:  String,
   default: "indefinido"
 },
 jineteLastName:  {
  type:  String,
default: "indefinido"
},
 emailJinete: {
  type: String
 },
    nombreDelCaballo:  {
    type:  String,
   default: "indefinido"
 },
 FotoCaballo: {
  type: String
 },
    faltas:  {
    type:  Number,
   default: 0
 },
    faltas2: {
    type:  Number,
   default: 0
 },
    PEncontra: {
    type:  Number,
   default: 0
 },
    tiempo: {
      type:  Number,
     default: 0
   },
    tiempo2: {
      type:  Number,
     default: 0
   },
    tiempoOtimo: {
      type:  Number,
     default: 0
   },
   tiempoAcordado: {
    type:  Number,
   default: 0
 },
 tiempoAcordado2: {
  type:  Number,
 default: 0
},
    clasifico: Boolean,

    vallas: {
      type: Array,
      default: []
    },
    vallas2: {
      type: Array,
      default: []
    },
    clubRepresenta: {
      type: String,
    },
    fotos: {
      type: Boolean,
      default: false
    },
    fotosCompeticion:{
      type: Array,
      default: []
    },
    pista: String,
    altura: String,
    estadoCompeticion:{
      type: String,
      default: "pendiente"
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

inscriptosSchema.plugin(toJSON);
const Inscriptos = mongoose.model('Inscriptos', inscriptosSchema);
export default Inscriptos;
