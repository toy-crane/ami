import React from "react";
import Icon from "./index";
import { ICONS } from "./constants";
import { Flex } from "theme-ui";

export default {
	title: "Atoms/Icon",
};

export const allIcon = () => (
	<Flex>
		<Icon icon={ICONS.chevronDown}></Icon>
		<Icon icon={ICONS.chevronRight}></Icon>
		<Icon icon={ICONS.menu}></Icon>
		<Icon icon={ICONS.github}></Icon>
		<Icon icon={ICONS.warning}></Icon>
		<Icon icon={ICONS.copy}></Icon>
	</Flex>
);

export const IconWithColor = () => (
	<Icon icon={ICONS.menu} color="secondary100"></Icon>
);

export const IconWithClick = () => (
	<Icon icon={ICONS.menu} onClick={() => console.log("Hello")}></Icon>
);
