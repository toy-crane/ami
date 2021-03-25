import React from "react";
import { Story } from "@storybook/react";
import ChallangeSection from ".";
import { ClassCardProps } from "../../Molecules/ClassCard";
export default {
	title: "Organisms/Class Card Group",
	component: ChallangeSection,
};

export const sampleCards: ClassCardProps[] = [
	{
		key: "1",
		language: "typescript",
		status: "inProgress",
		to: "/challanges/1",
		start_at: new Date(),
	},
	{
		key: "2",
		language: "graphql",
		status: "close",
		to: "/challanges/2",
		start_at: new Date(),
	},
	{
		key: "3",
		language: "javascript",
		status: "close",
		to: "/challanges/3",
		start_at: new Date(),
	},
	{
		key: "4",
		language: "react",
		status: "close",
		to: "/challanges/4",
		start_at: new Date(),
	},
	{
		key: "5",
		language: "python",
		status: "close",
		to: "/challanges/5",
		start_at: new Date(),
	},
];

const Template: Story = () => (
	<ChallangeSection cards={sampleCards}></ChallangeSection>
);
export const Basic = Template.bind({});
