import express from 'express';
import Stripe from 'stripe';
import catchedAsync from '../utils/catchedAsync';

const stripe = new Stripe("sk_test_51OV23RJIcQW1ZZ0xwpVu7pFPP0n4c5QhywImKZI49iDdoVItHbquJEchIxNt60AL2q4vrpNe5uKfnsvwPAy6znMi00rUGq8ZO4",{
});


// const stripeWebhookRouter = express.Router();

// stripeWebhookRouter.post(
//     '/webhook',
//     express.raw({ type: 'application/json' }),
//     catchedAsync(async (req, res) => {
//         const sig = req.headers['stripe-signature'];

//         try {
 
//         } catch (error) {
//             console.error("Error en el webhook:", error);
//             return res.status(400).json({ error: error.message });
//         }
//     })
// );


export async function manejarWebhookStripe(req, res) {
    const sig = req.headers['stripe-signature'];

    try {
        const event: Stripe.Event = await stripe.webhooks.constructEvent(req.body, sig, "we_1OV2CLJIcQW1ZZ0xrddZ6Owk");

        // Evento de Pago de Factura Satisfactorio
        if (event.type === 'invoice.payment_succeeded') {
            const { subscription, customer } = event.data.object as Stripe.Invoice;
            if (typeof subscription === 'string') {

            const subscriptionDetails = await stripe.subscriptions.retrieve(subscription);
            // Acceder a los ítems de la línea de la suscripción
            const items = subscriptionDetails.items.data;

            // Suponiendo que hay un solo ítem de suscripción
            const priceId = items[0].price.id;

            // let user = await users.findOne({ customerId: customer });
            console.log(priceId);
            // Actualizar la información del usuario según el plan
            // if (priceId === 'price_1OOTRUIDkXxcP0RDxmMOsKpW') {
            //     user.plan.name = "Basic";
            //     user.plan.price = 34.99; // Considera obtener este valor dinámicamente
            //     user.plan.requests = 500;
            //     await user.save();
            // }
            // if (priceId === 'price_1OC3VQIDkXxcP0RDh9eIoKLd') {
            //     user.plan.name = "Plus";
            //     user.plan.price = 44.99; // Considera obtener este valor dinámicamente
            //     user.plan.requests = 1500;
            //     await user.save();
            // }
            // if (priceId === 'price_1OC3VQIDkXxcP0RDvJ4uU1hL') {
            //     user.plan.name = "Pro";
            //     user.plan.price = 64.99; // Considera obtener este valor dinámicamente
            //     user.plan.requests = 3000;
            //     await user.save();
            // }
        }
    }

        // Evento de Intento de Pago Satisfactorio
        if (event.type === 'payment_intent.succeeded') {
            const paymentIntent = event.data.object as Stripe.PaymentIntent;
            const customer = paymentIntent.customer as string;

            // const user = await use.findOneAndUpdate({ customerId: customer }, { $inc: { 'plan.requests': 100 } }, { new: true });
            // console.log(user);
        }

        // Evento de Método de Pago Adjunto
        if (event.type === 'payment_method.attached') {
            const paymentMethod = event.data.object as Stripe.PaymentMethod;
            const { id, customer } = paymentMethod;

            // await users.findOneAndUpdate({ customerId: customer as string }, { $set: { paymentMethod: id } });
        }

        res.status(200).json({ ok: true });    } catch (error) {
        console.error("Error en el webhook:", error);
        return res.status(400).json({ error: error.message });
    }
}

