import React from "react";
import { Story } from "@storybook/react";
import Icon from "./index";

export default {
	title: "Components/Icon",
	component: Icon,
};

const Template: Story = (args) => <Icon {...args} icon="menu"></Icon>;
export const Basic = Template.bind({});
