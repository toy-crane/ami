import React from "react";
import { Story } from "@storybook/react";
import SectionContainer from "./SectionContainer";
export default {
	title: "Organisms/Section Container",
	component: SectionContainer,
};

const Template: Story = () => (
	<SectionContainer title="section Container Sample!">Hello</SectionContainer>
);
export const Basic = Template.bind({});
