import React from "react";
import { Box } from "theme-ui";
import RegisterBanner from ".";
export default {
	title: "Organisms/Register Banner",
	component: RegisterBanner,
};

export const Basic = () => (
	<Box p={4}>
		<RegisterBanner></RegisterBanner>
	</Box>
);
