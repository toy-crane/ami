import React from "react";
import { Story } from "@storybook/react";
import Hero from "./index";
export default {
	title: "Organisms/Hero",
	component: Hero,
};

const Template: Story = () => <Hero></Hero>;
export const Basic = Template.bind({});
