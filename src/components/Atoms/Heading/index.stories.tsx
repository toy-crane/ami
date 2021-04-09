import React from "react";
import { Box } from "theme-ui";
import Heading from ".";

export default {
	title: "Atoms/Heading",
	component: [Heading],
};

export const Basic = () => (
	<Box>
		<Heading variant="pageTitle">Page Title</Heading>
		<Heading variant="sectionTitle">Section Title</Heading>
		<Heading variant="subTitle">SubTitle</Heading>
	</Box>
);
export const HeadingWithBorder = () => (
	<Heading variant="sectionTitle" hasBorder={true}>
		Heading
	</Heading>
);
