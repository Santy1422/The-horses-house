import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';
const usersSchema = new Schema(
  {
    horses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Horse',
      },
    ],
    professions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Professional',
      },
    ],
    Competiciones: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Pruebas',
      },
    ],
    club: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Club',
      },
    ],
    eventos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event',
      },
    ],
    userType: {
      type: String,
      enum: ['user', "club", "org", "fotografo", "federacion", "videos"],
      default: 'user',
    },
    rol: {
      type: String,
      enum: ["diseñador", "jurado", "locutor", "cronometrista", "delegado", "otro"]
    },

    amigos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', 
      },
    ],      
    email: {
      type: String,
      trim: true,
      // unique: true,
      lowercase: true,
    },
    firstName: {
      type: String,
      //required: true,

      minlength: 1,
      maxlength: 30,
    },

    lastName: {
      type: String,
      minlength: 1,
      maxlength: 30,
    },

    cellPhone: {
      type: String,
      default: null,
    },

    birthday: {
      type: String,
      default: null,

    },
    emailVerified: {
      type: Boolean,
    },

    verificationCode: {
      type: String,
    },

    password: {
      type: String,
    },


    workplaceRadio: {
      type: String,
      
    },

    country: {
      type: String,
      default: "Argentina"
      
    },

    province: {
      type: String,
      
    },

    profilePic: {
      type: String,
      default: 'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',
     
    },
    
    rating: {
      type: Array,
      default: [0]
  },

    zipCode: {
      type: String,
      default: "0000",
  },

  tokens: {
    type: [String], 
    default: [],     
  },
  profesionType:{
    type: Array,
  },

  deviceToken: {
    type: Array,
  },
  notificacionesPendientes: {
    type: [String], 
    default: [],     
  },
  onboardingdata: {
    type: Array,
  },
  

     
  },

  {
    timestamps: {
      createdAt: 'created_at', // Use `created_at` to store the created date
      updatedAt: 'updated_at', // and `updated_at` to store the last updated date
    },
  }
);

usersSchema.plugin(toJSON);
//usersSchema.plugin(paginate);

const User = mongoose.model('User', usersSchema);

export default User;