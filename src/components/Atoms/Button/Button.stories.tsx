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
import { ICONS } from "../Icon/constants";
import { StyledButton } from "./Button";
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
export const PrimaryButton = ButtonTemplate.bind({});
PrimaryButton.args = { variant: "primary" };

export const SecondaryButton = ButtonTemplate.bind({});
SecondaryButton.args = { variant: "secondary" };

const LinkButtonTemplate: Story<LinkButtonProps> = (args) => (
	<LinkButton {...args} route="/">
		Button with Link
	</LinkButton>
);
export const ButtonWithLink = LinkButtonTemplate.bind({});

const IconButtonTemplate: Story<IconButtonProps> = (args) => (
	<IconButton {...args} icon={ICONS.menu}>
		Button with Icon
	</IconButton>
);
export const ButtonWithIcon = IconButtonTemplate.bind({});

const newButton: Story = (args) => (
	<>
		<StyledButton href="javascript:;">Button Link</StyledButton>
	</>
);
export const newButtonWithEmotion = newButton.bind({});
