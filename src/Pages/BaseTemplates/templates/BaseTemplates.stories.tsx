import React from "react";
import { Story } from "@storybook/react";
import BaseTemplate from "./";
export default {
	title: "Templates /BaseTemplate",
	component: BaseTemplate,
};

const Template: Story = () => (
	<BaseTemplate>
		<h1>Hello</h1>
		<p>Base Template!</p>
	</BaseTemplate>
);
export const Basic = Template.bind({});
