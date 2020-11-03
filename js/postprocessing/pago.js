// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_51HjLb9ABZcByK9CS3uiY0nzR1NaquRLIeSozaYmj4tmKsneggbHEcX0eBS4sVdIqx9tEFoT23K1D6KHPvRGBIxbB00a8NlmzpH');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 8,90,
  currency: 'usd',
  payment_method_types: ['card'],
});