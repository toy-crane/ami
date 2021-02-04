import React from "react";
import { Story } from "@storybook/react";
import Icon from "./index";
import { ICONS } from "./constants";
export default {
	title: "Atoms/Icon",
	component: Icon,
};

const Template: Story = (args) => <Icon {...args} icon={ICONS.menu}></Icon>;
export const Basic = Template.bind({});
