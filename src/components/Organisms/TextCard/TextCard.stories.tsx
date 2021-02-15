import React from "react";
import { Story } from "@storybook/react";
import TextCard from "./";
export default {
	title: "Organisms/TextCard",
	component: TextCard,
};

const Template: Story = () => (
	<TextCard title="hello" content="this is sample paragraph is it Loong????" />
);
export const Basic = Template.bind({});
