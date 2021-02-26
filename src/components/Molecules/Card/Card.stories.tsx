import React from "react";
import { Story } from "@storybook/react";
import Card from ".";
import { Box } from "theme-ui";
export default {
	title: "Molecules/Card",
	component: Card,
};

const Template: Story = (args) => (
	<Box sx={{ display: "inline-flex" }}>
		<Card
			id="1"
			to="/"
			language="typescript"
			status="inProgress"
			start_at={new Date()}
			{...args}
		></Card>
	</Box>
);
export const Basic = Template.bind({});
