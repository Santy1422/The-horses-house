import express from 'express'
import {checkJwt} from "../middlewares/checkJwt"
import controller from '../controllers/club.controller'
import catchedAsync from '../utils/catchedAsync';

const clubRoute = express.Router()

clubRoute.route('/newClub').post(checkJwt,catchedAsync (controller.newClub));

clubRoute.route('/searchClubsByName/:clubName').get(checkJwt, catchedAsync(controller.searchClubsByName));

clubRoute.route('/getClubById/:clubId').get(checkJwt, catchedAsync(controller.getClubById));

clubRoute.route('/editClub/:id').patch(checkJwt, catchedAsync(controller.editClub));

clubRoute.route('/delete/:id').delete(checkJwt, catchedAsync(controller.editClub));




export default clubRoute;