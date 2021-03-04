/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	classCardGroup: React.ReactNode;
	EPCardGroup: React.ReactNode;
	FAQSection: React.ReactNode;
}

interface DescSectionContainerProps {
	baseColor?: string;
}

const HeroContainer: React.FC = (props) => (
	<Container py={[5, 6]}>{props.children}</Container>
);

const ClassCardGroupContainer: React.FC = (props) => (
	<Container py={[4, 5]} baseColor="gray0">
		{props.children}
	</Container>
);

const EPCardGroupContainer: React.FC = (props) => (
	<Container py={[4, 5]}>{props.children}</Container>
);

const FAQSectionContainer: React.FC = (props) => (
	<Container py={[4, 5]} baseColor="gray0">
		{props.children}
	</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	classCardGroup,
	EPCardGroup,
	FAQSection,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<ClassCardGroupContainer>{classCardGroup}</ClassCardGroupContainer>
			<EPCardGroupContainer>{EPCardGroup}</EPCardGroupContainer>
			<FAQSectionContainer>{FAQSection}</FAQSectionContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
