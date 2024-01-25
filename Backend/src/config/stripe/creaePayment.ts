import { stripe } from './stripe';
import Stripe from 'stripe';

export const createPayment = async (customer: string,priceId: string,email: string) => {
	const subscription = await stripe.subscriptions.create({
		customer: customer,
		items: [{ price: priceId }],
		payment_settings: {
			payment_method_options: {
				card: {
					request_three_d_secure: 'any',
				},
			},
			payment_method_types: ['card'],
			save_default_payment_method: 'on_subscription',
		},
		expand: ['latest_invoice.payment_intent'],
	});
	// return the client secret and subscription id
	return {
		subscriptionId: subscription.id,
	};
}


