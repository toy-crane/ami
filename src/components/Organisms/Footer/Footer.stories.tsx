import React from "react";
import { Story } from "@storybook/react";
import Footer from ".";
export default {
	title: "Organisms/Footer",
	component: Footer,
};

const Template: Story = () => <Footer></Footer>;
export const Basic = Template.bind({});
