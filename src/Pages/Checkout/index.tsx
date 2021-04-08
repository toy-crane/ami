import CheckoutTemplate from "./templates";
import React from "react";
import { CheckoutForm } from "components";

const Checkout = () => (
	<CheckoutTemplate
		checkoutForm={<CheckoutForm></CheckoutForm>}
	></CheckoutTemplate>
);

export default Checkout;
