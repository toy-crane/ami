import React from "react";
import { Story } from "@storybook/react";
import Badge from "./index";
import { ICONS } from "../Icon/constants";
export default {
	title: "Atoms/Badge",
	component: [Badge],
};

const BadgeTemplate: Story = (args) => <Badge {...args}>Badge</Badge>;
export const PrimaryBadge = BadgeTemplate.bind({});
PrimaryBadge.args = { variant: "primary" };
