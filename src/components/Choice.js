import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

export default function Choice() {
  const [stripeError, setStripeError] = useState(null);

  const direct = {
    price: "price_1M7crOJFnf0JNd4Lm5G8UEep",
    quantity: 1,
  };

  const card = {
    price: "price_1M7cs5JFnf0JNd4L2GwfkchL",
    quantity: 1,
  };

  const redirectToCheckout = async (method) => {
    console.log("redirectToCheckout");

    const checkoutOptions = {
      lineItems: [method === "direct" ? direct : card],
      mode: "payment",
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    };

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="container notif">
      <div className="heading">Method of Payment</div>
      <a rel="noopener noreferrer" className="slider__arrow-link" onClick={() => redirectToCheckout("direct")}>
        <span>Direct / Wire Transfer ($1000.00)</span>
        <img
          src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
          alt=""
        />
      </a>
      <br />
      <br />
      <a rel="noopener noreferrer" className="slider__arrow-link" onClick={() => redirectToCheckout("card")}>
        <span>Credit / Debit Card ($1030.00)</span>
        <img
          src="https://raw.githubusercontent.com/jarekTerejko/fem-challenges-solutions/8aedb521950e6df5c9d89b1ab463784486aca94a/room-homepage-master/images/icon-arrow.svg"
          alt=""
        />
      </a>
    </div>
  );
}
