import React from "react";
import ActivationForm from ".";
import { Flex } from "@theme-ui/components";
export default {
	title: "Organisms/Activation Form",
	component: ActivationForm,
};

export const basic = () => (
	<ActivationForm sx={{ width: "authContainer" }}></ActivationForm>
);
