/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import React from "react";
import BaseTemplate, { Container } from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
	textCardGroup: React.ReactNode;
}

const HeroContainer: React.FC = (props) => (
	<Container>
		<Box mb={[5, 6]}>{props.children}</Box>
	</Container>
);
const TextCardGroupContainer: React.FC = (props) => (
	<Container baseColor="gray0" py={6} sx={{ alignItems: "center" }}>
		<Box>{props.children}</Box>
	</Container>
);

const MainTemplate: React.FC<MainTemplateProps> = ({ hero, textCardGroup }) => {
	return (
		<BaseTemplate>
			<HeroContainer>{hero}</HeroContainer>
			<TextCardGroupContainer>{textCardGroup}</TextCardGroupContainer>
		</BaseTemplate>
	);
};

export default MainTemplate;
