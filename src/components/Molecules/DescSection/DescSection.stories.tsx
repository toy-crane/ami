import React from "react";
import { Story } from "@storybook/react";
import DescSection from ".";
import languageImage from "../../../assets/img/mainSection/language-group.png";
import { Container } from "../../../Pages/BaseTemplates/templates";
export default {
	title: "Molecules/DescSection",
	component: DescSection,
	argTypes: {
		imagePosition: {
			control: {
				type: "select",
				options: ["left", "right"],
			},
		},
	},
};

const Template: Story = (args) => (
	<Container>
		<DescSection
			{...args}
			boldTitle="챌린지 "
			title="찾기"
			desc="안녕하세요"
			image={languageImage}
		></DescSection>
	</Container>
);
export const Basic = Template.bind({});
