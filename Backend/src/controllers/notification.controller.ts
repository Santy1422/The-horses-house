
import usersSchema from "../databases/mongodb/schemas/usersSchema"
import axios from "axios";

const getDeviceToken = async (req, res) => {
const {token} = req.body
const user = await usersSchema.findById(req.user)
if(!user) res.status(400).send("El usuario no existe")
if(!token) res.status(400).send("El token no llego")

user.deviceToken.forEach((ele) => {
    if(ele !== token) {
    user.deviceToken.push(token)
    res.status(200).send("Token Agregado correctamente")
}else res.status(400).send("El token ya existe")

})
}

const sendNotificationendpoint = async (req, res) => {
    const {email, body, title} = req.body
    const user = await usersSchema.findOne({email: email})
    if(!user) res.status(400).send("El usuario no existe")

let tokens = user.deviceToken
if(!title) res.status(400).send("Falta el titulo")
await sendNotifications(tokens, body, title)
    }




const sendNotifications = async (tokens, body, title) => {
    const notifications = tokens.map((token) => {
      return {
        to: token,
        title,
        body,
      };
    });
  let arrayDeTokens = tokens
    try {
      const responses = await Promise.all(
        notifications.map((notification) => {
          return axios.post("https://exp.host/--/api/v2/push/send", notification, {
            headers: {
              'host': 'exp.host',
              'accept': 'application/json',
              'accept-encoding': 'gzip, deflate',
              'content-type': 'application/json',
            },
          });
        })
      );
  
      const sentNotifications = responses.map((response) => {
        if (response.error) {
          throw new Error(response.data.message);
        }
        return response.data.payload;
      });
  
  
      return sentNotifications;
    } catch (error) {
      // Manejar el error de la primera función (sendNotifications)
      console.log(error);
      throw error;
    }
  };

const controller = {
    getDeviceToken,
    sendNotificationendpoint
}


export default controller
