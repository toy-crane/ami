/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";
import Divider from "../../../components/Atoms/Divider";

interface MainTemplateProps {
	hero: React.ReactNode;
	ChallangeSection: React.ReactNode;
	EPSection: React.ReactNode;
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
	<Container py={[4, 5]}>{props.children}</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	ChallangeSection,
	EPSection,
	FAQSection,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<ClassCardGroupContainer>{ChallangeSection}</ClassCardGroupContainer>
			<EPCardGroupContainer>{EPSection}</EPCardGroupContainer>
			<Divider></Divider>
			<FAQSectionContainer>{FAQSection}</FAQSectionContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
