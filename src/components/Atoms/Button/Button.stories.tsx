import React from "react";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
	title: "Atoms/Button",
	component: Button,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
	},
};

const Template: Story<ButtonProps> = (args) => (
	<Button {...args}>Button</Button>
);
export const PrimaryButton = Template.bind({});
PrimaryButton.args = { variant: "primary" };
export const SecondaryButton = Template.bind({});
SecondaryButton.args = { variant: "secondary" };
