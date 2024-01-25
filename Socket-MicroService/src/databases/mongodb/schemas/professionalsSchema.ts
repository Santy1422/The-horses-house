import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';

const professionalsSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    ///rider
    clientes: {
      type: Array
    },
    servicios: {
      type: Array
    },
    riderProfesional: {
      isActive: {
        type: Boolean,
        default: false
      },

      categoria: {
        type: String, 
      },
      actividad: {
        domando: {
          type: Boolean
        }
      }
    },
    riderDomador: {
      isActive: {
        type: Boolean,
        default: false
      },

      categoria: {
        type: String, 
      },
      actividad: {
        domando: {
          type: Boolean
        }
      }
    },
    riderNoProfesional: {
      isActive: {
        type: Boolean,
        default: false
      },
      domador: {
        type: Boolean
      },
      categoria: {
        type: String, 
      },
      actividad: {
        domando: {
          type: Boolean
        }
      }
    },
    //club organizador de eventos
    club: {
      isActive: {
        type: Boolean,
        default: false
      },
      tipo: {
        type: String
      },
      rol: {
        type: String
      },
      clubes: {
        type: String,
      },
      actividad: {
        eventos: {
          type: Array,
          ref: 'eventSchema',

        }
      }
    },

       ///dueño de haras

    dueño_de_haras: {
      isActive: {
        type: Boolean,
        default: false
      },
      categoria: {
        type: String,
      },
    },

    ///herrero

    herrero: {
      isActive: {
        type: Boolean,
        default: false
      },
    },

    ///veterinario
    veterinario: {
      isActive: {
        type: Boolean,
        default: false
      },
      categoria: {

        type: String,
        default: false
      },
      tipo: {
        type: String,
        default: false
      },
    },
      ///transportista
      criador: {
        isActive: {
          type: Boolean,
          default: false
        },
  
        tipo: {
          type: String,
          default: false
        },
        clientes: {
          type: Array
        },
      },
    ///transportista
    transportista: {
      isActive: {
        type: Boolean,
        default: false
      },

      tipo: {
        type: String,
        default: false
      },
    },
    ///caballerizo
    caballerizo: {
      isActive: {
        type: Boolean,
        default: false
      },

      tipo: {
        type: String,
        default: false
      },
    },
  },

  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);



professionalsSchema.plugin(toJSON);
//usersSchema.plugin(paginate);


const Professional = mongoose.model('Professional', professionalsSchema);

export default Professional;
