import React from "react";
import { Story } from "@storybook/react";
import MyPage from ".";

export default {
	title: "Pages/MyPage",
	component: MyPage,
};

const Template: Story = () => <MyPage></MyPage>;
export const Basic = Template.bind({});
