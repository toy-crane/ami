/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	classCardGroup: React.ReactNode;
}

interface DescSectionContainerProps {
	baseColor?: string;
}

const HeroContainer: React.FC = (props) => (
	<Container py={[5, 6]} baseColor="gray0">
		{props.children}
	</Container>
);

const ClassCardGroupContainer: React.FC = (props) => (
	<Container py={[4, 5]}>{props.children}</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	classCardGroup,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<ClassCardGroupContainer>{classCardGroup}</ClassCardGroupContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
