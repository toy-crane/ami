import React from "react";
import { Story } from "@storybook/react";
import TextCardGroup from ".";
export default {
	title: "Organisms/TextCardGroup",
	component: TextCardGroup,
};

const Template: Story = () => <TextCardGroup />;
export const Basic = Template.bind({});
