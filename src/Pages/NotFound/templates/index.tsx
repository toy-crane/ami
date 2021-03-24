/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate from "../../templates/BaseTemplates";
import { SmallContainer } from "Pages/templates";

interface MainTemplateProps {
	notFound: React.ReactNode;
}

const NotFoundContainer: React.FC = (props) => (
	<SmallContainer py={6}>{props.children}</SmallContainer>
);

const MainTemplate: React.FC<MainTemplateProps> = ({ notFound }) => {
	return (
		<BaseTemplate>
			<NotFoundContainer>{notFound}</NotFoundContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
