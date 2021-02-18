import React from "react";
import { Story } from "@storybook/react";
import DescSectionGroup from ".";
export default {
	title: "Organisms/DescSectionGroup",
	component: DescSectionGroup,
};

const Template: Story = () => <DescSectionGroup />;
export const Basic = Template.bind({});
