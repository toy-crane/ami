import React from "react";
import { Story } from "@storybook/react";
import Card from ".";
export default {
	title: "Molecules/Card",
	component: Card,
};

const Template: Story = (args) => (
	<Card language="typescript" status="inProgress" {...args}></Card>
);
export const Basic = Template.bind({});
