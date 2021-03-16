import React from "react";
import { Story } from "@storybook/react";
import AuthSection from ".";
import { Flex } from "@theme-ui/components";
export default {
	title: "Organisms/Auth Section",
	component: AuthSection,
};

const Template: Story = () => (
	<Flex
		sx={{
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
		}}
	>
		<AuthSection></AuthSection>
	</Flex>
);
export const Basic = Template.bind({});
