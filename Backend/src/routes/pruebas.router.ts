import express from 'express'
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/pruebas.controller';
import catchedAsync from '../utils/catchedAsync';

const pruebasRoutes = express.Router()


pruebasRoutes.route('/updatePrueba/:id').put(checkJwt, catchedAsync(controller.modificarPrueba));


export default pruebasRoutes;