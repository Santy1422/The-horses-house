import express from 'express'
import catchedAsync from '../utils/catchedAsync';
import {stripeCheckout,stripeSetup } from '../controllers/stripe.controller';
const stripeRouter = express.Router()
import {checkJwt} from "../middlewares/checkJwt"

stripeRouter.route('/setup').post(catchedAsync(stripeSetup))
stripeRouter.route('/checkout').post( catchedAsync(stripeCheckout))







export default stripeRouter
