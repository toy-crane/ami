/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, BoxProps } from "theme-ui";
import React from "react";
import { Container } from "../BaseTemplates/index";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
	width?: string;
	zindex?: number;
}

const AuthWrapper: React.FC = (props) => (
	<Container
		width="100%"
		baseColor="background"
		zindex={5}
		sx={{
			alignItems: "center",
			justifyContent: "center",
			display: "flex",
		}}
	>
		{props.children}
	</Container>
);

const BaseTemplate: React.FC = ({ children }) => (
	<AuthWrapper>{children}</AuthWrapper>
);

export default BaseTemplate;
export { Container };
