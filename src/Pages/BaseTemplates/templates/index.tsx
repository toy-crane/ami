/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import Header from "../../../components/Organisms/Header";
import React from "react";

const HeaderWrapper: React.FC = (props) => (
	<Flex
		sx={{
			width: "100%",
			maxWidth: "container",
			alignItems: "center",
			py: 3,
			mx: [3, "auto"],
		}}
	>
		{props.children}
	</Flex>
);

const BaseTemplate: React.FC = ({ children }) => (
	<React.Fragment>
		<HeaderWrapper>
			<Header />
		</HeaderWrapper>
	</React.Fragment>
);

export default BaseTemplate;
