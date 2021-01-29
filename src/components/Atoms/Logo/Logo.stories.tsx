import React from "react";
import { Story } from "@storybook/react";
import Logo from "./index";
import { Box } from "theme-ui";

export default {
	title: "Atoms/Logo",
	component: Logo,
};

const Template: Story = (args) => {
	if (args.color === "black") {
		return (
			<Box>
				<Logo {...args} />
			</Box>
		);
	} else {
		return (
			<Box bg="black">
				<Logo {...args} />;
			</Box>
		);
	}
};
export const Basic = Template.bind({});
