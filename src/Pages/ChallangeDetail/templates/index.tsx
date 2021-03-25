import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";
import { Grid } from "theme-ui";

interface ActivateTemplateProps {
	challangeBanner: React.ReactNode;
	challangeDesc: React.ReactNode;
	challangeFAQSection: React.ReactNode;
}

const ChallangeBannerContainer: React.FC = (props) => (
	<Container p={[4, 5]} baseColor="gray80">
		{props.children}
	</Container>
);

const ChallangeDescContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

const ChallangeFAQSectionContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

// theme UI jsx 사용 시, sx Props 작동 안함
const ChallangeDetailTemplate = ({
	challangeBanner,
	challangeDesc,
	challangeFAQSection,
}: ActivateTemplateProps) => {
	return (
		<BaseTemplate>
			<Grid sx={{ gap: [3, 4] }}>
				<ChallangeBannerContainer>{challangeBanner}</ChallangeBannerContainer>
				<ChallangeDescContainer>{challangeDesc}</ChallangeDescContainer>
				<ChallangeFAQSectionContainer>
					{challangeFAQSection}
				</ChallangeFAQSectionContainer>
			</Grid>
		</BaseTemplate>
	);
};

export default ChallangeDetailTemplate;
