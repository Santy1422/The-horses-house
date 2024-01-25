import express from 'express'
import {verifyFirebaseToken} from "../utils/firebaseSdk"
import {checkJwt} from "../middlewares/checkJwt"
import catchedAsync from '../utils/catchedAsync';
import controller from '../controllers/mercadoPago.controller';

const mercadoPagoRoutes = express.Router()

mercadoPagoRoutes.route('/webhook').post( catchedAsync (controller.webhook));
mercadoPagoRoutes.route('/pagar').post( checkJwt, catchedAsync (controller.mercadopagoController));
mercadoPagoRoutes.route('/addCard').post( checkJwt, catchedAsync (controller.addNewCard));
mercadoPagoRoutes.route('/suscribirse').post( checkJwt, catchedAsync (controller.subscription));


export default mercadoPagoRoutes;
