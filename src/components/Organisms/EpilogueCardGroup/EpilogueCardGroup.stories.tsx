import React from "react";
import { Story } from "@storybook/react";
import EpilogueCardGroup from ".";
export default {
	title: "Organisms/Epilogue Card Group",
	component: EpilogueCardGroup,
};

const Template: Story = () => <EpilogueCardGroup></EpilogueCardGroup>;
export const Basic = Template.bind({});
