/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	DescSectionGroup: React.ReactNode;
}

const HeroContainer: React.FC = (props) => (
	<Container py={[5, 6]}>{props.children}</Container>
);

const DescSectionGroupContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	DescSectionGroup,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<DescSectionGroupContainer>{DescSectionGroup}</DescSectionGroupContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
