import React from "react";
import { Story } from "@storybook/react";
import Divider from "./index";

export default {
	title: "Atoms/Divider",
	component: [Divider],
};

const DividerTemplate: Story = (args) => <Divider {...args}>Badge</Divider>;
export const PrimaryBadge = DividerTemplate.bind({});
