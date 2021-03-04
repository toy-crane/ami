import React from "react";
import { Story } from "@storybook/react";
import Icon, { IconProps } from "./index";
import { ICONS } from "./constants";
export default {
	title: "Atoms/Icon",
	component: Icon,
	icon: {
		variant: {
			control: {
				type: "select",
				options: ICONS,
			},
		},
	},
};

const Template: Story<IconProps> = (args) => <Icon {...args}></Icon>;
export const Basic = Template.bind({});
