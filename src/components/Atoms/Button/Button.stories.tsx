import React from "react";
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
export const ButtonWithIconAndText = () => (
	<Button href="/" icon={ICONS.menu}>
		Hello
	</Button>
);
