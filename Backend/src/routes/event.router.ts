import express from 'express'
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/event.controller'
import catchedAsync from '../utils/catchedAsync';
const multer = require("../middlewares/multer")

const eventRoute = express.Router()

eventRoute.route('/add').post(checkJwt,catchedAsync (controller.newEvent));
eventRoute.route('/publicar/:eventId').post(checkJwt,catchedAsync (controller.publicarEvent));
eventRoute.route('/openinscription/:eventId').post(checkJwt,catchedAsync (controller.OpenInscription));
eventRoute.route('/closeinscription/:eventId').post(checkJwt,catchedAsync (controller.closeInscriotion));

eventRoute.route('/myEvents').get( checkJwt, catchedAsync(controller.myEvents));
eventRoute.route('/deleteEventById/:id').get(checkJwt, catchedAsync(controller.deleteEvent));
eventRoute.route('/findEventById/:id').get( checkJwt, catchedAsync(controller.findEventById));
eventRoute.route('/findEventByIdDetailCard/:id').get( checkJwt, catchedAsync(controller.findEventDetailCard));

eventRoute.route('/findEventWithInscriptionDetailById/:id').get( checkJwt, catchedAsync(controller.findEventWithInscriptions));

eventRoute.route('/currentEvent').get( checkJwt, catchedAsync(controller.CurrentEvents));

eventRoute.route('/editEventCategoria/:id').patch(checkJwt, catchedAsync(controller.editEventCategoria));
eventRoute.route('/getEventosBorrador').get(checkJwt, catchedAsync(controller.getEventosBorrador));
eventRoute.route('/getEventosBorradorByUser').get(checkJwt, catchedAsync(controller.getEventosBorradorByUser));
eventRoute.route('/getEventoPublicadosById').get(checkJwt, catchedAsync(controller.getEventoPublicadosById));

eventRoute.route('/all').get(checkJwt, catchedAsync(controller.allEvents));
eventRoute.route('/allEventsByStatus').get(checkJwt, catchedAsync(controller.allEventsByStatus));
eventRoute.route('/inscribir').post( checkJwt, catchedAsync(controller.inscriptoManual));

export default eventRoute;
