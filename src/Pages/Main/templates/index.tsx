/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	classCardGroup: React.ReactNode;
	DescSectionGroup: React.ReactNode[];
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

const DescSectionContainer: React.FC<DescSectionContainerProps> = (props) => (
	<Container py={[4, 5]} {...props}>
		{props.children}
	</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	DescSectionGroup,
	classCardGroup,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<ClassCardGroupContainer>{classCardGroup}</ClassCardGroupContainer>
			{DescSectionGroup.map((DescSection, index) =>
				index % 2 === 0 ? (
					<DescSectionContainer>{DescSection}</DescSectionContainer>
				) : (
					<DescSectionContainer baseColor="gray0">
						{DescSection}
					</DescSectionContainer>
				)
			)}
		</BaseTemplate>
	);
};

export default MainTemplate;
