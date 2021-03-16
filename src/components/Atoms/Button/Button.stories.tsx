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
export const ButtonWithOutlink = () => (
	<Button href="http://react.codepot.kr">outlink Button</Button>
);
export const ButtonWithInlink = () => <Button href="/">inlink Button</Button>;
export const FullSize = () => (
	<React.Fragment>
		<Button width="100%" href="/">
			inlink Button
		</Button>
	</React.Fragment>
);
export const ButtonWithIconAndText = () => (
	<Button href="/" icon={ICONS.menu}>
		Hello
	</Button>
);

export const socialButtons = () => (
	<Button variant="github" href="/" icon={ICONS.github}>
		Github로 로그인하기
	</Button>
);
