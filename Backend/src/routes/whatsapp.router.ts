// import express from 'express'
// import {checkJwt} from "../middlewares/checkJwt"
// import controller from '../controllers/whatsapp.controller'
// import clientsHandler from '../config/whatsapp';
// import catchedAsync from '../utils/catchedAsync';

// const whatsappRoutes = express.Router()
// whatsappRoutes.route('/start').get( catchedAsync(controller.getWhspQR))




// whatsappRoutes.route('/init').put(checkJwt,catchedAsync(async (req,res)=>{
//     const a = req as any
//     const x = await clientsHandler.AllClients[a.user.id].getState()
//     await clientsHandler.AllClients[a.user.id].sendMessage("5493435202921@s.whatsapp.net","testing")
//     res.status(200).json({status:x})
// }))


// export default whatsappRoutes
