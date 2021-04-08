import React from "react";
import { Heading } from "theme-ui";
import { Box } from "theme-ui";
import ChallangeBanner from ".";
export default {
	title: "Organisms/Challange Banner",
	component: ChallangeBanner,
};

export const Basic = () => (
	<Box bg="gray100" p={4}>
		<ChallangeBanner></ChallangeBanner>
	</Box>
);

export const withColor = () => (
	<Box p={4}>
		<ChallangeBanner color="black"></ChallangeBanner>
	</Box>
);
