import React from "react";
import { Story } from "@storybook/react";
import BaseTemplate, { AuthContainer } from ".";
import AuthTemplate from ".";
export default {
	title: "Templates /AuthTemplate",
	component: BaseTemplate,
};

const Template: Story = () => (
	<AuthTemplate>
		<AuthContainer>
			<h1>Hello</h1>
			<p>Base Template!</p>
		</AuthContainer>
	</AuthTemplate>
);
export const Basic = Template.bind({});
