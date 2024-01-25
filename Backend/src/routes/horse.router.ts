import express from 'express'
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/horse.controller'
import catchedAsync from '../utils/catchedAsync'
import multer from 'multer'

const horseRoutes = express.Router()
const upload = multer({ storage: multer.memoryStorage() });

horseRoutes.route('/search/:name').get(catchedAsync(controller.searchHorse));
horseRoutes.route('/newHorse').post(checkJwt, catchedAsync(controller.newHorse));
horseRoutes.route('/myHorse').get(checkJwt, catchedAsync(controller.myHorse));
horseRoutes.route('/findHorseById/:id').get(checkJwt, catchedAsync(controller.findHorseById));
horseRoutes.route('/deleteHorseById/:id').delete(checkJwt, catchedAsync(controller.deleteHorseById));
horseRoutes.route('/editHorse/:id').post(checkJwt, catchedAsync(controller.editHorse));
horseRoutes.route('/searchAllHorse/:aafeInicio').get(catchedAsync(controller.LookingHorse));
horseRoutes.route('/searchHorseByName/:horseName').get(checkJwt, catchedAsync(controller.SearchHorseByName));
horseRoutes.route('/selectHorseById/:horseId').get(checkJwt, catchedAsync(controller.SelectHorseById));
horseRoutes.route('/claimHorse/:horseId').post(checkJwt, catchedAsync(controller.ClaimHorse));
horseRoutes.route('/uploadHorsePic').post(upload.any(),checkJwt, catchedAsync(controller.uploadHorsePic));



export default horseRoutes;
