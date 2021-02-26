import React from "react";
import { Story } from "@storybook/react";
import CardGroup from ".";
import { CardProps } from "../../Molecules/Card";
export default {
	title: "Organisms/Card Group",
	component: CardGroup,
};

export const sampleCards: CardProps[] = [
	{
		id: "1",
		language: "typescript",
		status: "inProgress",
		to: "/",
		start_at: new Date(),
	},
	{
		id: "2",
		language: "graphql",
		status: "close",
		to: "/",
		start_at: new Date(),
	},
	{
		id: "3",
		language: "javascript",
		status: "close",
		to: "/",
		start_at: new Date(),
	},
	{
		id: "4",
		language: "react",
		status: "close",
		to: "/",
		start_at: new Date(),
	},
	{
		id: "5",
		language: "python",
		status: "close",
		to: "/",
		start_at: new Date(),
	},
];

const Template: Story = () => <CardGroup cards={sampleCards}></CardGroup>;
export const Basic = Template.bind({});
