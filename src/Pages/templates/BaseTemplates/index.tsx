/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Header, Footer, Container } from "components";

interface HeaderWrapperProps {
	// Header 상단 fix 여부
	isFixed?: boolean;
	children?: React.ReactNode;
}

interface BaseTemplateProps {
	hasFixedHeader?: boolean;
	children?: React.ReactNode;
}

const HeaderWrapper = ({ isFixed, children }: HeaderWrapperProps) => (
	<Container
		borderBottom="0.5px solid"
		position={isFixed ? "fixed" : "relative"}
		width="100%"
		baseColor="background"
		zindex={5}
		sx={{
			alignItems: "center",
			display: "flex",
		}}
	>
		{/* Header Fixed 빈 공백 채우기 */}
		{isFixed && <Container sx={{ height: "80px" }}></Container>}
		{children}
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

const BaseTemplate = ({ children, hasFixedHeader }: BaseTemplateProps) => (
	<React.Fragment>
		<HeaderWrapper isFixed={hasFixedHeader}>
			<Header />
		</HeaderWrapper>
		{children}
		<FooterWrapper>
			<Footer />
		</FooterWrapper>
	</React.Fragment>
);

export default BaseTemplate;
