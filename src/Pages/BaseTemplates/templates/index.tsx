/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Header from "../../../components/Organisms/Header";
import React from "react";

const Container: React.FC = (props) => (
	<Box
		sx={{
			maxWidth: "container",
			mx: [3, "auto"],
		}}
		{...props}
	>
		{props.children}
	</Box>
);

const HeaderWrapper: React.FC = (props) => (
	<Container
		sx={{
			alignItems: "center",
			height: "10vh",
			display: "flex",
		}}
	>
		{props.children}
	</Container>
);

const MainWrapper: React.FC = (props) => (
	<Container sx={{ minHeight: "70vh" }}>{props.children}</Container>
);

const BaseTemplate: React.FC = ({ children }) => (
	<React.Fragment>
		<HeaderWrapper>
			<Header />
		</HeaderWrapper>
		<MainWrapper>{children}</MainWrapper>
	</React.Fragment>
);

export default BaseTemplate;
