import React from "react";
import AuthSection from ".";
import { Flex } from "@theme-ui/components";
export default {
	title: "Organisms/Auth Section",
	component: AuthSection,
};

export const LoginSection = () => (
	<Flex
		sx={{
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}
	>
		<AuthSection type="login"></AuthSection>
	</Flex>
);

export const SignUpSection = () => (
	<Flex
		sx={{
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}
	>
		<AuthSection type="signUp"></AuthSection>
	</Flex>
);
