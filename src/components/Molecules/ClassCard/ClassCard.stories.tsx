import React from "react";
import { Story } from "@storybook/react";
import ClassCard from ".";
import { Box } from "theme-ui";
export default {
	title: "Molecules/Class Card",
	component: ClassCard,
};

const Template: Story = (args) => (
	<Box sx={{ display: "inline-flex" }}>
		<ClassCard
			id="1"
			to="/"
			language="typescript"
			status="inProgress"
			start_at={new Date()}
			{...args}
		></ClassCard>
	</Box>
);
export const Basic = Template.bind({});
