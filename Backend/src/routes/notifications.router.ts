import express from 'express'
import {verifyFirebaseToken} from "../utils/firebaseSdk"
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/notification.controller'
import catchedAsync from '../utils/catchedAsync';

const notificationsRoutes = express.Router()

notificationsRoutes.route('/getDeviceToken').post(checkJwt, catchedAsync (controller.getDeviceToken));
notificationsRoutes.route('/sendNotification').post( catchedAsync (controller.sendNotificationendpoint));


export default notificationsRoutes;
