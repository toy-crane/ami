import React from "react";
import { Story } from "@storybook/react";
import {
	Button,
	ButtonProps,
	LinkButton,
	IconButton,
	LinkButtonProps,
	IconButtonProps,
} from "./index";
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

const LinkButtonTemplate: Story<LinkButtonProps> = (args) => (
	<LinkButton {...args} route="/">
		Button with Link
	</LinkButton>
);
export const ButtonWithLink = LinkButtonTemplate.bind({});

const IconButtonTemplate: Story<IconButtonProps> = (args) => (
	<IconButton {...args} icon="menu">
		Button with Icon
	</IconButton>
);
export const ButtonWithIcon = IconButtonTemplate.bind({});
