import { Flex } from "@theme-ui/components";
import Avatar from "components/Atoms/Avatar";
import React from "react";
import Dropdown from ".";
export default {
	title: "Molecules/Dropdown",
	component: Dropdown,
};
export const DropdownWithAvatar = () => (
	<Flex sx={{ justifyContent: "flex-end" }}>
		<Dropdown>
			<Avatar src="https://avatars1.githubusercontent.com/u/3426196?v=4"></Avatar>
		</Dropdown>
	</Flex>
);
