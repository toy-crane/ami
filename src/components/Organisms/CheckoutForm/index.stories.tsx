import React from "react";
import { CheckoutForm } from ".";

export default {
	title: "Organisms/Checkout Form",
	component: CheckoutForm,
};

export const basic = () => (
	<CheckoutForm
		sx={{ width: "authContainer" }}
		onSubmit={() => console.log("hello")}
	></CheckoutForm>
);
