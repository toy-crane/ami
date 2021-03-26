import CheckoutTemplate from "./templates";
import React from "react";
import { ChallangeBanner } from "components";

const Checkout = () => (
	<CheckoutTemplate
		checkoutForm={<div>Hello</div>}
		challangeBanner={<ChallangeBanner />}
	></CheckoutTemplate>
);

export default Checkout;
