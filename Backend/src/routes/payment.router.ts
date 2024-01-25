import express from 'express'
import {verifyFirebaseToken} from "../utils/firebaseSdk"
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/payment.controller'
import catchedAsync from '../utils/catchedAsync';

const paymentRoutes = express.Router()


paymentRoutes.route('/efectivo').post(checkJwt, catchedAsync(controller.pagoEnEfectivo));


export default paymentRoutes;
