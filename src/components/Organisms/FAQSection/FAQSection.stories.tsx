import React from "react";
import { Story } from "@storybook/react";
import FAQSection from ".";
export default {
	title: "Organisms/FAQ Section",
	component: FAQSection,
};

const Template: Story = () => <FAQSection></FAQSection>;
export const Basic = Template.bind({});
