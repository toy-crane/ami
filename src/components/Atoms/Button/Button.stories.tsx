import React from "react";
import { Story } from "@storybook/react";
import { IconButton, IconButtonProps } from "./index";
import { Button } from "components";
import { ICONS } from "../Icon/constants";
export default {
	title: "Atoms/Button",
	component: [Button],
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
	},
};

export const PrimaryButton = () => (
	<Button variant="primary">Primary Button</Button>
);
export const SecondaryButton = () => (
	<Button variant="secondary">Secondary Button</Button>
);
export const ButtonWithOutlink = () => <Button href="/">outlink Button</Button>;
export const ButtonWithInlink = () => <Button href="/">inlink Button</Button>;

const IconButtonTemplate: Story<IconButtonProps> = (args) => (
	<IconButton {...args} icon={ICONS.menu}>
		Button with Icon
	</IconButton>
);
export const ButtonWithIcon = IconButtonTemplate.bind({});
