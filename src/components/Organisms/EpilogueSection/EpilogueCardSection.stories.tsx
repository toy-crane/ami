import React from "react";
import { Story } from "@storybook/react";
import EpilogueSection from ".";
export default {
	title: "Organisms/Epilogue Section",
	component: EpilogueSection,
};

const Template: Story = () => <EpilogueSection></EpilogueSection>;
export const Basic = Template.bind({});
