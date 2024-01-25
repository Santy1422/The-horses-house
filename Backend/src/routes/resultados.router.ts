import express from 'express'
import {verifyFirebaseToken} from "../utils/firebaseSdk"
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/resultados.controller'
import catchedAsync from '../utils/catchedAsync';

const resultadosRoutes = express.Router()

resultadosRoutes.route('/agregar').post(checkJwt, catchedAsync(controller.ponerResultados));
resultadosRoutes.route('/recibirInscriptos/:pruebaID').get(catchedAsync(controller.enviarInscriptos));
resultadosRoutes.route('/recibirInscriptosClasificados/:pruebaID').get( catchedAsync(controller.enviarClasificados));


export default resultadosRoutes
