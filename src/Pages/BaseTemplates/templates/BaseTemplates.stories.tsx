import React from "react";
import { Story } from "@storybook/react";
import BaseTemplate from "./";
export default {
	title: "Templates /BaseTemplate",
	component: BaseTemplate,
};

const Template: Story = () => <BaseTemplate></BaseTemplate>;
export const Basic = Template.bind({});
