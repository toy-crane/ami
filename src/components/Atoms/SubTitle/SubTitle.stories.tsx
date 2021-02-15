import React from "react";
import { Story } from "@storybook/react";
import SubTitle from "./index";
export default {
	title: "Atoms/SubTitle",
	component: SubTitle,
};

const Template: Story = (args) => <SubTitle {...args}>소제목</SubTitle>;
export const Basic = Template.bind({});
