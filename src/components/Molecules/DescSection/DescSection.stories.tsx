import React from "react";
import { Story } from "@storybook/react";
import DescSection from ".";
import { Container } from "../../../Pages/templates/BaseTemplates";
export default {
	title: "Molecules/DescSection",
	component: DescSection,
	argTypes: {
		type: {
			control: {
				type: "select",
				options: [0, 1, 2],
			},
		},
	},
};

const Template: Story = (args) => (
	<Container>
		<DescSection type={0} {...args}></DescSection>
	</Container>
);
export const Basic = Template.bind({});
