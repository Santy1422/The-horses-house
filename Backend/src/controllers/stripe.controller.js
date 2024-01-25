const Stripe = require("stripe");

const stripe = new Stripe("sk_test_51OV23RJIcQW1ZZ0xwpVu7pFPP0n4c5QhywImKZI49iDdoVItHbquJEchIxNt60AL2q4vrpNe5uKfnsvwPAy6znMi00rUGq8ZO4", {
});

export const cancelSubscription = async () => {
	const subscription = await stripe.products.list()

}

export const stripeSetup = async (req,res) => {
	// try {

	// 	const { customerId } = req.body

	// 	const session = await stripe.checkout.sessions.create({
	// 		mode: 'setup',
	// 		payment_method_types: ["card"],
	// 		success_url: "https://app.bumoai.com/en/subscription",
	// 		cancel_url: "https://app.bumoai.com/en/subscription",
	// 		customer: customerId,
	// 	})

	// 	res.status(200).json(session.url)
	// } catch (error) {
	// 	res.status(400).json({ error })
	// }
}

export const stripeCheckout = async (req, res) => {
    try {
      const customer = await stripe.customers.create();

      const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: customer.id},
        {apiVersion: '2023-10-16'}
      );
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 7000,
        currency: 'ARG',
        customer: customer.id,
        automatic_payment_methods: {
          enabled: true,
        },
      });
      res.status(200).send({
        paymentIntent: paymentIntent.client_secret,
        ephemeralKey: ephemeralKey.secret,
        customer: customer.id,
        publishableKey: 'pk_test_51OV23RJIcQW1ZZ0x0ouQwhzW8G5P0UOf4ZZRVUd50B0cYLtXFXFREJBqSkhLRtzsCtRrssEMYch2vEfOZofi06JC00BCU3SqND'
      });
    } catch (error) {
      console.error(error);
      res.status(405).json(error);
    }
  };