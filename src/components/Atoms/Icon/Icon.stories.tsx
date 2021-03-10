import React from "react";
import Icon from "./index";
import { IconNames } from "./constants";
import { Flex } from "theme-ui";

export default {
	title: "Atoms/Icon",
};

export const allIcon = () => (
	<Flex>
		<Icon icon={IconNames.chevronDown}></Icon>
		<Icon icon={IconNames.chevronRight}></Icon>
		<Icon icon={IconNames.menu}></Icon>
		<Icon icon={IconNames.github}></Icon>
	</Flex>
);

export const IconWithColor = () => (
	<Icon icon={IconNames.menu} color="secondary100"></Icon>
);

export const IconWithLink = () => <Icon icon={IconNames.menu} href="/"></Icon>;
