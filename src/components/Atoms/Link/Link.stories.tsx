import React from "react";
import { Story } from "@storybook/react";
import Link, { LinkProps } from "./index";
import Icon from "../Icon";

export default {
	title: "Components/Link",
	component: Link,
};

const BasicLinkTemplate: Story<LinkProps> = (args) => (
	<Link {...args} href="#">
		Link Text
	</Link>
);
export const Basic = BasicLinkTemplate.bind({});

const IconLinkTemplate: Story<LinkProps> = (args) => (
	<Link {...args} href="#">
		<Icon icon="menu"></Icon>
	</Link>
);

export const IconLink = IconLinkTemplate.bind({});
