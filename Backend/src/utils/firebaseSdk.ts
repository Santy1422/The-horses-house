require('dotenv').config();
//const UserModel = require('../databases/mongodb/schemas/usersSchema');
import usersSchema from "../databases/mongodb/schemas/usersSchema"
var firebaseAdmin = require('firebase-admin');
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const admin = require('firebase-admin');
const uuid = require('uuid');
const { findUserIdByEmail } = require('../utils/functions');


/*let { private_key } = JSON.parse(process.env.GOOGLE_PRIVATE_KEY);
if (!private_key) {
  throw new Error('Private Key is invalid: ', private_key);
}*/
//const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCu74ighvEAFTqU\nKwKl6krYhxqZ3b02O+W5LlkcACBjsC+ANxm/n8Dmf686VIZo8TqcBWZD831qnNxK\nknpkWWpGOYY4l2p1qQPaTL9hd4g3oCrtjOOp5gkf5H95P/enBNXcwox5zDOMGO7c\n2ycTQMrAdkUvDwkbGiyW9+uaTSFFgmMIvL+LA7RGX1l1k4NlO8RgxnoDZcZEwpV6\nZi+fFloME0IOqnHN2KjU3ErLbSQCY5jh9JhadecNgAa483ZQT1ZV9wpTtpHkLFWC\nU1ZC6Y2dGu0aDM/gSJZyFnrSc1yZtHDs7+5KaCQbNmodlytn0B707qKmv/7lTZLc\nfZwoCh5PAgMBAAECggEACO7FUMEjPEhZOeiqVXONx9m6Q4Idn8/WLqsNtM7S2JRO\nEKN/ppfPP1Xkyjs3s9MhlYb3DmA4FsIUw6AQLOCd+yED2A7vSjvLrRF/MkhqxcBh\ngMjRdUMAU0cVNUlNaZNnIkMy7iM9vJknVVLBf4uu7r37UWhYpDAld74II1Rt7wEg\nI4s0nurGaEiGiNEJBJEzWDqZyuogUnAzM+b6F2mGMTHI70713MKC4wBNHsmUh4VB\nt2jXEK7b/vLx4tRvuEoVve70hRSGa3uUHXayxlvwOGhhLyPh9UMtXIIZbMTGCH2s\nOjFarbYu3+LdtXVW0Tmlh+brwQQ+FH2cNnwdZucytQKBgQDyHHm6Yi9m5GxEbgMf\n1dFDe61ZhniVCUILGpgg/ejBIksx3rCg5hSBvAu6XCavVe42cmmatMQCH48VGxTB\njlBlk02OQOxoX0bfy1MoCqkrupkp/YNzdlDPYFuH8LdH9DAOqMBOUHK9OI4pjP/W\nki8nUxjsH+Ot9sUmvOVsG+bkZQKBgQC4+I014RUSNQMfVKFYiWTtB63p3gv276cf\nde/yOBl4bFOpcZSsPvvBZGFTuhMjxP4RaWs1OJ1hD9WR+S8GZubhJ0elwxNVFYP+\nfV+1RbLkvwEV9QU0FqbBxteGm/QXnBeWVVqDBFWq9pEHINzFNHNa4mcVz0Qdxm74\npIXMciPKowKBgHzTW5tR1fipmnxpb+jw93Rgho6auv60CD3rVzXjUyaIRNaQZuZ9\n2WLODgnmSvepSSj/Mh1WR5yEouOR09C7TA4itSC7rmddgBAQJ26EmJX4HdG9aBGW\nlbFlj6t12zkY19InBQcbiRyv1PPtQ1ZghjkzKa1L/7oIebswNuTXOeLVAoGAVopD\nVv/14czXpyLrUgcGJze+kHqI0oGRiVCecI76q7LS+aXgTy4wj2ytdITMS6Hw1Kij\ntgTE7RKBc4hIDhC62ICOLumz88zbMofp7V+ssQUENwep5ZLrdiHX2GzCqQEor/dD\nH6U5h4FQnSss3z8I8W6XmEaeseeTJ9Whm+OTB00CgYAnqWtlCOABrRdYZJrvKBoa\n2qx58nkbnzB0doEkuP5klIv2PnFTYMpsMIgwcLC1VRYZJFPTwlu9eyO1sMry1EjG\n+zwrrdHXbKJoJhNw/hsHvEEKJUFcaKfEwqmAvxhcmN5rmkyJYS1rldsftE/L47v1\naGgobxRhB8hAiXxLhMoUvw==\n-----END PRIVATE KEY-----\n",


const private_key = process.env.FIREBASE_PRIVATE_KEY;


if (!private_key) {
  throw new Error('La clave privada no está definida en la variable de entorno.');
}


var firebaseJson = {
  type: "service_account",
  project_id: "hrh-42ee1",
  private_key_id: "b11c735a5e5ac51c11cda62fad29016a535a6e46",
  private_key: private_key,
  client_email: "firebase-adminsdk-1r3xw@hrh-42ee1.iam.gserviceaccount.com",
  client_id: "107036285754269526015",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1r3xw%40hrh-42ee1.iam.gserviceaccount.com",
  universe_domain: "googleapis.com"
};
//ruta a json descargado de la pagina de firebase
//const dbUrl = 'https://findahomehenry-default-rtdb.firebaseio.com';
//aqui se le otrogan los privilegios de admin dandole la ruta al .json descargado de firebase
// Se saca la base de datos ya que solo utilizaremos la autenticacion de firebase sdk

const app = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(firebaseJson),
  //databaseURL: dbUrl,
});

// se asignan las reclamaciones al usuario admin, volunteer y user

export const setAdmin = (uid) => {
  firebaseAdmin
    .auth(app)
    .setCustomUserClaims(uid, { admin: false, volunteer: false, user: true });
};

// se extrae la data del usuario autenticado por medio la red social(la data depende d ela red social usada)

const extractUserData = async (uid) => {
  return await firebaseAdmin
    .auth(app)
    .getUser(uid)
    .then((userRecord) => userRecord.toJSON())
    .catch((err) => err.message);
};

//rellena el req con una nueva clave "user" ahora se puede hacer req.user al decodificar correcamente el token
export const checkJwt = (req, res, next) => {
  //jason web token
  if (!req.headers.authorization) {
    return res
      .status(401)
      .send(
        'Te olvidaste de enviar por header el token! Authorization: Bearer TOKEN_DE_FIREBASE'
      );
  }
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    return res
      .status(401)
      .send(
        "Te olvidaste el authorization del header incie en Bearer, ejemplo 'Bearer TOKEN_ID'"
      );
  }
  firebaseAdmin
    .auth()
    .verifyIdToken(idToken)
    .then(async (decodedIdToken) => {
      //se ha creado una propiedad "user" en el req
      //y está guardando la decodificacion, la decodificacion son todos los datos del usuario
      req.user = decodedIdToken;
      if (!decodedIdToken.hasOwnProperty('email')) {
        const data = await extractUserData(decodedIdToken.uid);
        req.user = { ...req.user, ...data.providerData[0] };
      }
      return next();
    })
    .catch((error) => {
     
      return res
        .status(401)
        .send('Tu token está mal no se decodificó' + error.message);
    });
};

const checkAdmin = async (req, res, next) => {
  //json web token
  try {
    const checkUser = await usersSchema.findOne({
      _email: req.user.email,
      tipo: 'Admin',
    });
    if (!checkUser) {
      return res.status(501).send('No eres admin: ' + req.user.email);
    } else {
      return next();
    }
  } catch (err) {
    res.status(501).send(err.message);
  }
};

const checkVolunteer = async (req, res, next) => {
  //json web token
  try {
    const checkUser = await usersSchema.findOne({
      _email: req.user.email,
      tipo: 'Volunteer',
    });
    if (!checkUser) {
      return res.status(501).send('No eres Voluntario: ' + req.user.email);
    } else {
      return next();
    }
  } catch (err) {
    res.status(501).send(err.message);
  }
};
const messaging = firebaseAdmin.messaging();


// Función para agregar el ID del usuario al token de Firebase
export const verifyFirebaseToken = async (req, res, next) => {
  try {
    // Obtener el token Firebase del encabezado de la solicitud
    const authorizationHeader = req.headers.authorization;

   // console.log("token "+authorizationHeader);

    if (!authorizationHeader) {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }

    // Dividir el encabezado para obtener el token
    const tokenFirebase = authorizationHeader.split(' ')[1];

    // Verificar el token Firebase
    const decodedToken = await admin.auth().verifyIdToken(tokenFirebase);
    //console.log('decodedToken:', JSON.stringify(decodedToken, null, 2));

    // Obtener el correo electrónico del token verificado
    //const userEmail = decodedToken.email;

    //console.log("email "+ userEmail)

    // Buscar en tu base de datos el ID asociado al correo electrónico
    //const userId = await usersSchema.findOne({ email: userEmail.email }); 
    //const userId = await findUserIdByEmail(userEmail);
    
    // if (!userId) {
    //   return res.status(401).json({ message: 'Usuario no encontrado en la base de datos' });
    // }

    
    req.user = decodedToken ;
   // console.log('user en middleware:', req.user);

    next(); // Continuar con la siguiente función de middleware o ruta
  } catch (error) {
    return res.status(500).json({ message: 'Error al autenticar el token proporcionado: ' + error.message });
  }
};


export const idUserFbToken = async (customToken) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(customToken);
    const userID = decodedToken.userId; 
    return userID;
  } catch (error) {
    throw new Error('Error al verificar el token y obtener el ID de usuario personalizado: ' + error.message);
  }
};


/*export const verifyFirebaseToken = async (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];

  
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token de autenticación no proporcionado o en formato incorrecto' });
  }

  const customToken = authorizationHeader.split('Bearer ')[1];
 

  try {
    
    // Verifica el token de Firebase
    //const decodedToken = await admin.auth().verifyIdToken(customToken);
   // const decodedToken = await admin.auth().verifyCustomToken(customToken);
    //console.log('Token válido:', decodedToken);

    try {
      const decodedToken = await admin.auth().verifyIdToken(customToken);
      console.log('Token válido:', decodedToken);
    } catch (error) {
      console.error('Error al verificar el token:', error);
    }
      

    // Extrae el ID de usuario del objeto claims
   const userId = decodedToken.claims.userId;

   console.log('Token id:', userId);

    // Asigna el ID de usuario a req.user.id
    req.user = {
     id: userId,
    };

    // Continúa con la siguiente función de middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token de autenticación no válido' });
  }
};*/


module.exports = {
  checkJwt,
  checkAdmin,
  checkVolunteer,
  setAdmin,
  messaging,
  extractUserData,
  //addUserIdToToken,
  idUserFbToken,
  verifyFirebaseToken,
};
