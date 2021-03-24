import React from "react";
import { Story } from "@storybook/react";
import BaseTemplate, { SmallContainer } from ".";
import AuthTemplate from ".";
export default {
	title: "Templates /AuthTemplate",
	component: BaseTemplate,
};

const Template: Story = () => (
	<AuthTemplate>
		<SmallContainer>
			<h1>Hello</h1>
			<p>Base Template!</p>
		</SmallContainer>
	</AuthTemplate>
);
export const Basic = Template.bind({});
