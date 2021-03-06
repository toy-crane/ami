import React from "react";
import { Story } from "@storybook/react";
import BaseTemplate from ".";
import { Container } from "components";
export default {
	title: "Templates /BaseTemplate",
	component: BaseTemplate,
};

const Template: Story = () => (
	<BaseTemplate>
		<Container>
			<h1>Hello</h1>
			<p>Base Template!</p>
		</Container>
	</BaseTemplate>
);
export const Basic = Template.bind({});
