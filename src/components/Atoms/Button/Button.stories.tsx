import React from "react";
import { Button } from "components";
import { IconNames } from "../Icon/constants";
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
export const ButtonWithOutlink = () => (
	<Button href="http://react.codepot.kr">outlink Button</Button>
);
export const ButtonWithInlink = () => <Button href="/">inlink Button</Button>;
export const ButtonWithIconAndText = () => (
	<Button href="/" icon={IconNames.menu}>
		Hello
	</Button>
);
