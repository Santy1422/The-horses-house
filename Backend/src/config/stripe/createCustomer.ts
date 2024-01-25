import Stripe from 'stripe';

import { stripe } from './stripe';

export const createCustomer = async (email: string, name: string) => {
  const params: Stripe.CustomerCreateParams = {
    email: email,
    name: name
  };

  const customer: Stripe.Customer = await stripe.customers.create(params);

  return customer.id
};