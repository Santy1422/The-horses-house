import mongoose, { Schema } from 'mongoose';
import { toJSON } from './plugins';
import validator from 'validator'
import { ClientError } from '../../../utils/errors';
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
    clubFederado: [
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
      enum: ["free", "simple", "premium", "super premium"],
      default: "free"
    },
    rol: {
      profesion: {
        type: String,
        enum: ["diseñador", "ninguna", "jurado", "locutor", "cronometrista", "delegado", "fotografo", "videoMaker", "veterinario", "herrero", "AdminEventos"]

      },
      trabajos:
        [{
          type: Schema.Types.ObjectId,
          ref: 'Fotografos',
        }],
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new ClientError('Email no valido.', 400);
        }
      },
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
      minlength: 1,
      maxlength: 30,
    },

    lastName: {
      type: String,
      minlength: 1,
      maxlength: 30,
    },
    stripeId: String,
    cellPhone: {
      type: String,
      default: null,
    },

    birthday: {
      type: String,
      default: null,

    },

    country: {
      type: String,
      default: "Argentina"

    },

    province: {
      type: String,

    },
    cbu: {
      type: String,

    },

    profilePic: {
      type: String,
      default: 'https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png',

    },

    city: {
      type: String,
      default: "0000",
    },

    zipCode: {
      type: String,
      default: "0000",
    },

    cardsToken: {
      type: Array
    },
    mercadoPagoId: {
      type: String,
    },
    tokens: {
      type: [String],
      default: [],
    },
    profesionType: {
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

    code: {
      type: String,
      default: "verificado"
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

const User = mongoose.model('User', usersSchema);

export default User;