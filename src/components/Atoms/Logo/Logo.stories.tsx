import React from "react";
import Logo from "./index";
import { Flex } from "theme-ui";

export default {
	title: "Atoms/Logo",
	component: Logo,
};

export const DefaultLogo = () => (
	<Flex sx={{ flexDirection: "column" }}>
		<Logo size="small"></Logo>
		<Logo size="medium"></Logo>
		<Logo size="large"></Logo>
	</Flex>
);
export const LogoWithColors = () => (
	<Flex sx={{ flexDirection: "column" }}>
		<Logo color="primary100"></Logo>
		<Logo color="white" bg="gray100"></Logo>
	</Flex>
);
export const LogoWithLink = () => <Logo href="/mypage"></Logo>;
