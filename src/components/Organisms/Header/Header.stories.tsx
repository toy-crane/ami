import React from "react";
import { Story } from "@storybook/react";
import Header from "./index";
export default {
	title: "Organisms/Header",
	component: Header,
};

const Template: Story = () => <Header></Header>;
export const Basic = Template.bind({});
