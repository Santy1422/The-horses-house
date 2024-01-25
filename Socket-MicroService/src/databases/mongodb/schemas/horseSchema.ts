import mongoose, { Schema } from 'mongoose';


const horseSchema = new mongoose.Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      
      minlength: 1,
      maxlength: 30,
    },
    age: {
      type: Number,      
      
    },
    breed: {
      type: String,
      
    },

    jockey: {
      type: String,
      
    },
    racingStats: {
      type: Object, 
    },

    aaef: {
      type: String,
      
    },
    gender: {
      type: String,
      
    },

    birthDate: {
      type: Date,
      
    },
    pedigreePic:
    {
      type: String,      
      default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',  // cambiar imagen default
    },

    horsePic:
    {
      type: String,      
      default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png', // cambiar imagen default
    },

    alturaSalto: {
      type: Number,
      
    },
    informacionAdicional: {
      sanidad: {
        type: Boolean,
        default: false
      },
      patea: {
        type: Boolean,
        default: false
      },
      muerde: {
        type: Boolean,
        default: false
      },
      manso: {
        type: Boolean,
        default: false
      },
      microchip: {
        type: Boolean,
        default: false
      }
    },

    horseServicios: {
      veterinaria: {
        type: Boolean,
        default: false
      },
      herrero: {
        type: Boolean,
        default: false
      },
      caballerizo: {
        type: Boolean,
        default: false
      },
      proveedores: {
        type: Boolean,
        default: false
      },
      transporte: {
        type: Boolean,
        default: false
      },
      profesor: {
        type: Boolean,
        default: false
      },
      domador: {
        type: Boolean,
        default: false
      },
      derechoLegal: {
        type: Boolean,
        default: false
      },
      pasaporte: {
        type: Boolean,
        default: false
      }
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const Horse = mongoose.model('Horse', horseSchema);

export default Horse;