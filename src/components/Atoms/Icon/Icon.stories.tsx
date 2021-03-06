import React from "react";
import Icon from "./index";
import { ICONS } from "./constants";
import { Flex } from "theme-ui";

export default {
	title: "Atoms/Icon",
};

export const allIcon = () => (
	<Flex>
		<Icon icon={ICONS.chevron_down}></Icon>
		<Icon icon={ICONS.chevron_right}></Icon>
		<Icon icon={ICONS.menu}></Icon>
	</Flex>
);

export const IconWithColor = () => (
	<Icon icon={ICONS.menu} color="secondary100"></Icon>
);

export const IconWithClick = () => (
	<Icon icon={ICONS.menu} onClick={(e) => alert("click")}></Icon>
);
