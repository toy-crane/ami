import React from "react";
import { Story } from "@storybook/react";
import ClassCardGroup from ".";
import { ClassCardProps } from "../../Molecules/ClassCard";
import EpilogueCardGroup from ".";
export default {
	title: "Organisms/Epilogue Card Group",
	component: EpilogueCardGroup,
};

export const sampleCards: ClassCardProps[] = [
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

const Template: Story = () => <EpilogueCardGroup></EpilogueCardGroup>;
export const Basic = Template.bind({});
