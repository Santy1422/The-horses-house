import jwt from "jsonwebtoken";
import response from "../utils/response";
import pruebasSchema from "../databases/mongodb/schemas/pruebasSchema"
import professionalsSchema from "../databases/mongodb/schemas/professionalsSchema"

import horseSchema from "../databases/mongodb/schemas/horseSchema"
import clubSchema from "../databases/mongodb/schemas/ClubSchema"
import usersSchema from "../databases/mongodb/schemas/usersSchema"
import { firmarToken } from "../utils/jwtUtils";
import { setAdmin } from '../utils/firebaseSdk';
import dotenv from 'dotenv';
import { crearUsuarioEnMercadoPago } from "../helpers/paymentFunctions";
import { createCustomer } from "../config/stripe/createCustomer";

dotenv.config();

// put /v1/user/editUser
const editUser = async (req, res) => {

  console.log("asd", req.body.editedUser)
  const { firstName, email, lastName, cellPhone, country, province, city, zipCode, cbu, profilePic, club, clubFederado } = req.body.editedUser;

  const result = await usersSchema.findById(req.user.id)

  result.firstName = firstName && firstName || result.firstName
  result.lastName = lastName && lastName || result.lastName
  result.email = email && email || result.email
  result.cellPhone = cellPhone && cellPhone || result.cellPhone
  result.country = country && country || result.country
  result.province = province && province || result.province
  result.city = city && city || result.city
  result.country = cbu && cbu || result.cbu
  result.zipCode = zipCode && zipCode || result.zipCode
  result.profilePic = req.body.editedUser.profilePic && req.body.editedUser.profilePic || result.profilePic
  result.club = club && club || result.club
  result.clubFederado = clubFederado && clubFederado || result.clubFederado
  result.profesionType = req.body.editedUser.professions && req.body.editedUser.professions || result.profesionType
  let profesiones
  if (req.body.editedUser.professions) {
    const professions = req.body.editedUser.professions || [];
    // Crear un objeto para mapear los nombres de las profesiones con los nombres de los campos
    const professionFieldMapping = {
      "Rider Profesional": "riderProfesional",
      "Rider No Profesional": "riderNoProfesional",
      "Rider Domador": "riderDomador",
      "Dueño de Haras": "dueño_de_haras",
      "Herrero": "herrero",
      "Veterinario": "veterinario",
      "Transportista": "transportista",
      "Criador": "criador",
      "Caballerizo": "caballerizo"
    };

    const profesionesConfig = {};
    professions.forEach((profesion) => {
      const fieldName = professionFieldMapping[profesion];
      if (fieldName) {
        profesionesConfig[fieldName] = { isActive: true };
      }
    });
    const nuevoProfesional = new professionalsSchema({
      user: result._id,
      ...profesionesConfig
    })
    await nuevoProfesional.save()

    result.professions = [nuevoProfesional._id]

    profesiones = nuevoProfesional
  } else {
    profesiones = await professionalsSchema.findById(result.professions)
  }

  await result.save()
  response(res, 200, { user: result, profesiones });
};
const authGoogle = async (req, res) => {
  console.log("req.body", req.body)
  try {
    const firebaseToken = req?.headers?.authorization?.split('Bearer ')[1];

    const user = req.user;
    const onboardingdata = req.body.onboardingdata;

    // split de name

    // let firstName = null;
    // let lastName = req.body?.lastname || req.body?.lastName || req.body?.LastName || null;


    // if (req.body.name || user.name) {
    //   const name = req.body.name || user.name;
    //   const nameParts = name.split(' ');

    //   firstName = nameParts[0] || '';

    //   if (nameParts.length > 1) {
    //     lastName = nameParts.slice(1).join(' ');
    //   } else {
    //     lastName = null; // Si solo se proporciona un nombre, establecer el apellido como una cadena vacía
    //   }
    // }

    let firstName = req.body.name || null
    let lastName = req.body.lastname || null


    const existingUser = await usersSchema.findOne({ email: user.email });
    let newUser;
    if (!existingUser) {

      // let createMercadoPagoUser = await  crearUsuarioEnMercadoPago(user.email)
      // let createStripeId = await createCustomer(user.email, firstName)

      let rol = req.body?.professions[0] === "Fotógrafo/Videos" || req.body.professions[0] === "Fotógrafo" ? "fotografo" :
        req.body?.professions[0] === "Proveedor de videos" ? "videoMaker" :
          req.body?.professions[0] === "Organizador de Eventos" ? "AdminEventos" : "ninguna"
      newUser = new usersSchema({
        // mercadoPagoId: createMercadoPagoUser,
        email: user.email,
        profilePic: user.picture,
        firstName: firstName,
        lastName: lastName,
        emailVerified: user.email_verified,
        onboardingdata: onboardingdata,
        onboarding: !!onboardingdata,
        rol: {
          profesion: rol
        },
        profesionType: req.body.professions,
        userType: "free",
        code: req.body.code
        //  stripeId: createStripeId
      });
      await newUser.save();

      const professions = req.body.professions || [];
      // Crear un objeto para mapear los nombres de las profesiones con los nombres de los campos
      const professionFieldMapping = {
        "Rider Profesional": "riderProfesional",
        "Rider No Profesional": "riderNoProfesional",
        "Rider Domador": "riderDomador",
        "Dueño de Haras": "dueño_de_haras",
        "Herrero": "herrero",
        "Veterinario": "veterinario",
        "Transportista": "transportista",
        "Criador": "criador",
        "Caballerizo": "caballerizo"
      };

      const profesionesConfig = {};
      professions.forEach((profesion) => {
        const fieldName = professionFieldMapping[profesion];
        if (fieldName) {
          profesionesConfig[fieldName] = { isActive: true };
        }
      });
      const nuevoProfesional = new professionalsSchema({
        user: newUser._id,
        ...profesionesConfig
      })
      await nuevoProfesional.save()
      newUser.professions = nuevoProfesional._id
      await newUser.save()


    } else {
      newUser = existingUser;
    };
    const jwtKey = process.env.JWT_RANDOM_PASSWORD;

    const token = jwt.sign({ userId: newUser._id, email: user.email, userType: user.userType }, jwtKey, {
      expiresIn: '3000h',
    });



    const userHorses = await horseSchema.find({ owner: newUser._id });

    const myCategory = await pruebasSchema.find({ inscriptos: newUser._id });
    const profesiones = await professionalsSchema.findById(newUser.professions)
    res.json({ success: true, user: newUser, newToken: token, userHorses: userHorses, myCategory: myCategory, profesiones: profesiones });
  } catch (error) {
    console.error('Error al autenticar con Google:', error);
    res.status(401).json({ success: false, error: 'Error al autenticar con Google' });
  }

};




const registerDashboard = async (req, res) => {

  console.log(req.body)
  res.status.send("gracias moira")
}


const getUserById = async (req, res) => {
  console.log(req.user)
  const user = await usersSchema.findById(req.user.id);
  if (!user) {
    return response(res, 404, { message: 'Usuario no encontrado' });
  }
  const result = user;
  const userHorses = await horseSchema.find({ owner: result._id });

  const myCategory = await pruebasSchema.find({ inscriptos: result._id });
  const profesiones = await professionalsSchema.findById(result.professions)
  res.status(200).json({ success: true, user: result, userHorses: userHorses, myCategory: myCategory, profesiones: profesiones });
};
const saveToken = async (req, res) => {
  const user = await usersSchema.findById(req.user.id);
  if (!user) return response(res, 404, { message: 'Usuario no encontrado' });
  else {
    user.deviceToken.map((ele) => {
      if (ele === req.body.token) return response(res, 404, { message: 'El token ya existe' })
      else {
        user.deviceToken.push(ele)
      }
      ;
    }
    )
    user.deviceToken.push()
    await user.save()
    response(res, 200, { message: 'El token fue guardado' })
  }
}

const recordatorio = async (req, res) => {

  const user = await usersSchema.findById(req.user.id)
  user.notificacionesPendientes.push(req.params.eventId)
  await user.save()
  response(res, 200, { message: 'Evento guardado' })
}

const deleteAccount = async (req, res) => {

  let searchUser = await usersSchema.findById(req.user.id)
  if (!searchUser) res.status(400).send("El email no existe")
  await searchUser.delete()
  response(res, 200, { message: 'Cuenta eliminada' })

}

const getClubs = async (req, res) => {
  const clubFederadoId = req?.user?.clubFederado
  const clubId = req?.user?.club

  const club = await clubSchema.findById(clubId)
  const clubFederado = await clubSchema.findById(clubFederadoId)

  if (!club || !clubFederado) {
    return res.status(404).json({ error: 'clubes no encontrados' })
  }

  res.status(200).json({ club: club, clubFederado: clubFederado })
}

const updateCodeValidation = async(req, res) => {
  let user = await usersSchema.findById(req.user.id)
  user.code = req.body.code
  await user.save()
  res.status(200).send("okey")
}
const controller = {
  editUser,
  authGoogle,
  getUserById,
  saveToken,
  recordatorio,
  deleteAccount,
  registerDashboard,
  getClubs,
  updateCodeValidation
}


export default controller