import React from "react";
import { Story } from "@storybook/react";
import Link, { LinkProps } from "./index";

export default {
	title: "Components/Link",
	component: Link,
};

const Template: Story<LinkProps> = (args) => (
	<Link {...args} href="#">
		Link Text
	</Link>
);
export const Basic = Template.bind({});
