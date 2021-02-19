/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	DescSectionGroup: React.ReactNode[];
}

interface DescSectionContainerProps {
	baseColor?: string;
}

const HeroContainer: React.FC = (props) => (
	<Container py={[5, 6]} baseColor="gray0">
		{props.children}
	</Container>
);

const DescSectionContainer: React.FC<DescSectionContainerProps> = (props) => (
	<Container py={[5, 6]} {...props}>
		{props.children}
	</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({
	hero,
	DescSectionGroup,
}) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
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
