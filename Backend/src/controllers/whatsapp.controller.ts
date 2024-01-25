import { ClientError } from "../utils/errors";
// import clientsHandler from "../config/whatsapp";


// GET /v1/chat/getqr
const getWhspQR = async (req, res) => {

  const UserId = "asdasda124124"
  // const usuario = await usersModel.findById(UserId); // Retrieve the user object using findById
	
  // if (!usuario) throw new ClientError("Este usuario asociado a ese token no existe en la db", 400)
//    clientsHandler.AddNewClient(UserId).then((succes) => {
//     const QR =  clientsHandler.AllQR[UserId]
//     res.status(200).json({ error: false, payload: { qr: QR, message: "Se ha generado el codigo qr exitosamente" } })

// }).catch((err) => 
// console.log(err)
// )
}

//NO SE USA; ES PARA GOLANG ESTA FUNCION:
// const SendMessageEndpoint = async (req, res) => {
//   const UserId = req.user.id
//   const { Message, Target } = req.body
//   if (typeof (Message) != "string" || typeof (Target) != "string") {
//     throw new ClientError("Por Body debe llegar, EJEMPLO: Message:'mensaje a enviar' y Target: '5493435202921@s.whatsapp.net'", 400)
//   }
//   const result = await axios.post(
//     `${WORKER_URL}/send?UserId=${UserId}`,
//     {
//       "Target": Target || "5493435202921@s.whatsapp.net",
//       "Message": Message || "Mensaje recibido del bot"
//     }
//     , {
//       headers: {
//         "X-Api-Key": API_KEY,
//         "Content-Type": "application/json"
//       }
//     })
//   res.status(200).json({ error: false, payload: { UserId, Message, Target, data: result.data } })
// }


const controller = {
  getWhspQR,

}


export default controller
