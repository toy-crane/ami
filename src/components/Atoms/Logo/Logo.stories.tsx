import React from "react";
import { Story } from "@storybook/react";
import Logo from "./index";

export default {
	title: "Atoms/Logo",
	component: Logo,
};

const Template: Story = (args) => {
	if (args.color === "white") {
		return <Logo bg="black" {...args} />;
	} else {
		return <Logo {...args} />;
	}
};
export const Basic = Template.bind({});
Basic.args = { color: "black" };
