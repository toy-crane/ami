import React from "react";
import { ActivationForm } from ".";

export default {
	title: "Organisms/Activation Form",
	component: ActivationForm,
};

export const basic = () => (
	<ActivationForm
		sx={{ width: "authContainer" }}
		onSubmit={() => console.log("hello")}
	></ActivationForm>
);
