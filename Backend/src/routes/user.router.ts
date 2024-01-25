import express from 'express'
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/user.controller'
import catchedAsync from '../utils/catchedAsync';
import {verifyFirebaseToken} from '../utils/firebaseSdk'

const userRoutes = express.Router()



userRoutes.route('/editUser').post(checkJwt, catchedAsync(controller.editUser));
userRoutes.route('/getUserById').get(checkJwt, catchedAsync(controller.getUserById));
userRoutes.route('/getClubs').get(checkJwt, catchedAsync(controller.getClubs));
userRoutes.route('/authGoogle').post(verifyFirebaseToken, catchedAsync(controller.authGoogle));
userRoutes.route('/savedevicetoken').post(checkJwt, catchedAsync(controller.saveToken));
userRoutes.route('/notificaciones/:eventId').get(checkJwt, catchedAsync(controller.recordatorio));
userRoutes.route('/delete').delete(checkJwt, catchedAsync(controller.deleteAccount));
userRoutes.route('/register').post(catchedAsync(controller.registerDashboard));
userRoutes.route('/updatecode').post(checkJwt, catchedAsync(controller.updateCodeValidation));



export default userRoutes;
