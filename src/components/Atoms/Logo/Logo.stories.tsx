import React from "react";
import Logo from "./index";
import { Flex } from "theme-ui";

export default {
	title: "Atoms/Logo",
	component: Logo,
};

export const DefaultLogo = () => <Logo></Logo>;
export const LogoWithColors = () => (
	<Flex sx={{ flexDirection: "column" }}>
		<Logo color="primary100"></Logo>
		<Logo color="white" bg="gray100"></Logo>
	</Flex>
);
export const LogoWithLink = () => <Logo href="/"></Logo>;
