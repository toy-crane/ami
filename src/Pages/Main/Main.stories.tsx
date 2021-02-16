import React from "react";
import { Story } from "@storybook/react";
import { Main } from "..";
export default {
	title: "Pages/Main",
	component: Main,
};

const Template: Story = () => <Main></Main>;
export const Basic = Template.bind({});
