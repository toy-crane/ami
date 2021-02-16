/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import Header from "../../../components/Organisms/Header";
import React from "react";
import Footer from "../../../components/Organisms/Footer";

export interface ContainerProps extends BoxProps {
	color?: string;
}
const Container: React.FC<ContainerProps> = (props: ContainerProps) => (
	<Box bg={props.color}>
		<Box
			sx={{
				maxWidth: "container",
				mx: [3, "auto"],
			}}
			{...props}
		>
			{props.children}
		</Box>
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

const FooterWrapper: React.FC = (props) => (
	<Container
		color="gray100"
		sx={{
			alignItems: "center",
			display: "flex",
			width: "100%",
			backgroundColor: "gray100",
		}}
		py={4}
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
		<FooterWrapper>
			<Footer />
		</FooterWrapper>
	</React.Fragment>
);

export default BaseTemplate;
