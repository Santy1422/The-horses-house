import express from 'express';
import { checkJwt } from "../middlewares/checkJwt";
import catchedAsync from '../utils/catchedAsync';
import controller from '../controllers/fotografos.controller';
import multer from 'multer';


const upload = multer({ storage: multer.memoryStorage() });

const fotografoRoutes = express.Router();

fotografoRoutes.route('/inscribirse').post(checkJwt, catchedAsync(controller.inscribirseEvento));

// Usa upload.any() para aceptar archivos en cualquier campo
fotografoRoutes.route('/upload/:eventId').post(upload.any(),checkJwt, catchedAsync(controller.udpload));
fotografoRoutes.route('/misEventos').get(checkJwt, catchedAsync(controller.fotografoAllEvents));
fotografoRoutes.route('/fotoseventos/:eventId').get(checkJwt, catchedAsync(controller.allFotografo));
fotografoRoutes.route('/fotoseventos/delete').post(checkJwt, catchedAsync(controller.deteleImages));

export default fotografoRoutes;
