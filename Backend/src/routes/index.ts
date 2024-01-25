import express, { Router } from "express";
import userRoutes from "./user.router";
import horseRoutes from "./horse.router";
import eventRoute from "./event.router";
// import whatsappRoutes from "./whatsapp.router";
import notificationsRoutes from "./notifications.router";
import paymentRoutes from "./payment.router";
import resultadosRoutes from "./resultados.router";
import mercadoPagoRoutes from "./mercadoPago";
import fotografoRoutes from "./fotografo.router";
import pruebasRoutes from "./pruebas.router";
import stripeRouter from "./stripe.router";
import { manejarWebhookStripe } from "./stripeWebHook";
import clubRoute from "./club.router";
const router = Router();


router.use('/user', userRoutes);
router.use('/horse', horseRoutes);
router.use('/event', eventRoute);
router.use('/club', clubRoute);
// router.use('/whatsapp', whatsappRoutes);
router.use('/notifications', notificationsRoutes);
router.use('/payment', paymentRoutes);
router.use('/resultados', resultadosRoutes);
router.use('/mercadopago', mercadoPagoRoutes);
router.use('/fotografo', fotografoRoutes);
router.use('/pruebas', pruebasRoutes )
router.use('/stripe', stripeRouter )
router.use("/webhook", express.raw({ type: 'application/json' }), manejarWebhookStripe);


export default router;