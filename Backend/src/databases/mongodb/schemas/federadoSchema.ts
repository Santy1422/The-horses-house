import mongoose, { Schema } from 'mongoose'; // Importa Schema desde mongoose
import { toJSON } from './plugins';


const federadosSchema = new mongoose.Schema({

  tipoRegistro: {
    type: String,
    enum: ['fei', 'caballo', 'binomio', 'jinete', 'federarClub', "pasaporteChip"],    
  },

  // datos generales
   
  costoFederacion: Number,
  comision: Number,
  totalPagar: Number,
  
  club: {
    type: String,      
  },

  numeroCelular: {
    type: String,      
  },

  fechaVencimientoFederacion: {
    type: Date,
  },


  jinete: {
    jineteId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    dni: String, 
        
    },

    caballo: {
      caballoId: {
        type: Schema.Types.ObjectId,
        ref: 'Horse',
      },

    solicitaPasaporte: {
      type: Boolean,
      default: false
    },
    solicitaChip: {
      type: Boolean,
      default: false
    }
  },

  receptorCredencial: {
    nombreReceptor: String,
    domicilio: String,
    localidad: String,
    provincia: String,
    codigoPostal: String
  },

  entrenador: {
    entrenadorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      
    },
  },  

  federarClub: {     
    emailClub: String,
    disciplinaClub: String,  

  },  
  pago: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payment',
    
  },
  
},

{
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }

);

federadosSchema.plugin(toJSON);
//usersSchema.plugin(paginate);

const Federado = mongoose.model('Federado', federadosSchema);
export default Federado;