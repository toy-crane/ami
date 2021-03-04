import React from "react";
import { Story } from "@storybook/react";
import AuthSection from ".";
export default {
	title: "Organisms/Auth Section",
	component: AuthSection,
};

const Template: Story = () => <AuthSection title="회원 가입하기"></AuthSection>;
export const Basic = Template.bind({});
