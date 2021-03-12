/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import React from "react";
import { Header, Footer } from "components";
export interface ContainerProps extends BoxProps {
	baseColor?: string;
}
const Container: React.FC<ContainerProps> = (props: ContainerProps) => (
	<Box bg={props.baseColor}>
		<Box
			sx={{
				px: [3, 0],
				mx: [0, "auto"],
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
		baseColor="gray0"
		sx={{
			display: "flex",
		}}
		py={4}
		mt={4}
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
