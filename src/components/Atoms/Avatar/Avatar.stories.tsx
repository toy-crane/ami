import React from "react";
import { Story } from "@storybook/react";
import { Avatar } from "theme-ui";

export default {
	title: "Atoms/Avatar",
	component: [Avatar],
};

const AvatarTemplate: Story = (args) => (
	<Avatar src="https://avatars1.githubusercontent.com/u/3426196?v=4"></Avatar>
);
export const Basic = AvatarTemplate.bind({});
