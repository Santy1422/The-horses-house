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
      type: String,
      default: "none"
    },
    categoria: {
      type: String,
    },
    premio:{
        type: Schema.Types.ObjectId,
        ref: 'Premios',
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
    clasifico: Boolean,
    puntuacion: {
      type: Number,
      default: 0
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
    posicion:  {
      type: Number,
      default: 0
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
