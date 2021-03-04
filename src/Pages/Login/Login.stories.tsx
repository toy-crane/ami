import React from "react";
import { Story } from "@storybook/react";
import Login from ".";

export default {
	title: "Pages/Login",
	component: Login,
};

const Template: Story = () => <Login></Login>;
export const Basic = Template.bind({});
