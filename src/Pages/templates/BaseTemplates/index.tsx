/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Header, Footer, Container } from "components";

const HeaderWrapper: React.FC = (props) => (
	<Container
		borderBottom="0.5px solid"
		position="fixed"
		width="100%"
		baseColor="background"
		zindex={5}
		sx={{
			alignItems: "center",
			display: "flex",
		}}
	>
		{props.children}
	</Container>
);

// Header Fixed 빈 공백 채우기
const EmptyContainer = () => <Container sx={{ height: "80px" }}></Container>;

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
		<EmptyContainer />
		{children}
		<FooterWrapper>
			<Footer />
		</FooterWrapper>
	</React.Fragment>
);

export default BaseTemplate;
