import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps, LinkButton, ButtonLinkProps } from "./index";
export default {
	title: "Atoms/Button",
	component: [Button, LinkButton],
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
	},
};

const ButtonTemplate: Story<ButtonProps> = (args) => (
	<Button {...args}>Button</Button>
);
export const BasicButton = ButtonTemplate.bind({});
BasicButton.args = { variant: "primary" };

const ButtonLinkTemplate: Story<ButtonLinkProps> = (args) => (
	<LinkButton {...args} route="/">
		Button with Link
	</LinkButton>
);
export const ButtonWithLink = ButtonLinkTemplate.bind({});
