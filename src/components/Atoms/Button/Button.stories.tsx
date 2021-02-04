import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps, ButtonLink, ButtonLinkProps } from "./index";

export default {
	title: "Atoms/Button",
	component: [Button, ButtonLink],
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
	<ButtonLink {...args} route="/">
		Button with Link
	</ButtonLink>
);
export const LinkButton = ButtonLinkTemplate.bind({});
