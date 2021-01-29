import React from "react";
import { Story } from "@storybook/react";
import Grid from "./index";
import { Box } from "theme-ui";
export default {
	title: "Atoms/Grid",
	component: Grid,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["mobileLayout", "webLayout"],
			},
		},
	},
};

const Template: Story = (args) => (
	<Grid {...args}>
		<Box bg="primary">Box</Box>
		<Box bg="primary">Box</Box>
		<Box bg="primary">Box</Box>
		<Box bg="primary">Box</Box>
		<Box bg="primary">Box</Box>
		<Box bg="primary">Box</Box>
	</Grid>
);
export const MobileLayoutGrid = Template.bind({});
MobileLayoutGrid.args = { variant: "mobileLayout" };
