/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import Header from "../../../components/Organisms/Header";
import React from "react";
import Footer from "../../../components/Organisms/Footer";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
}
const Container: React.FC<ContainerProps> = (props: ContainerProps) => (
	<Box bg={props.baseColor}>
		<Box
			sx={{
				px: [3, "none"],
				mx: ["none", "auto"],
				maxWidth: "container",
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
		baseColor="gray100"
		sx={{
			display: "flex",
			backgroundColor: "gray100",
		}}
		py={4}
	>
		{props.children}
	</Container>
);

const BaseTemplate: React.FC = ({ children }) => (
	<React.Fragment>
		<HeaderWrapper>
			<Header />
		</HeaderWrapper>
		{children}
		<FooterWrapper>
			<Footer />
		</FooterWrapper>
	</React.Fragment>
);

export default BaseTemplate;
export { Container };
