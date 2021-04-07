import CheckoutTemplate from "./templates";
import React from "react";
import { ChallangeBanner, CheckoutForm } from "components";

const Checkout = () => (
	<CheckoutTemplate
		checkoutForm={<CheckoutForm></CheckoutForm>}
		challangeBanner={<ChallangeBanner />}
	></CheckoutTemplate>
);

export default Checkout;
