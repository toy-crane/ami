import React from "react";
import ActivationSection from ".";
import { Flex } from "@theme-ui/components";
export default {
	title: "Organisms/Auth Section",
	component: ActivationSection,
};

export const ActivationContent = () => (
	<Flex
		sx={{
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			width: "authContainer",
		}}
	>
		<ActivationSection></ActivationSection>
	</Flex>
);
