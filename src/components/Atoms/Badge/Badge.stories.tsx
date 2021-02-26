import React from "react";
import { Story } from "@storybook/react";
import Badge from "./index";

export default {
	title: "Atoms/Badge",
	component: [Badge],
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["primary", "secondary"],
			},
		},
	},
};

const BadgeTemplate: Story = (args) => <Badge {...args}>Badge</Badge>;
export const PrimaryBadge = BadgeTemplate.bind({});
PrimaryBadge.args = { variant: "primary" };
