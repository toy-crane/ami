import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";
import { Grid } from "theme-ui";

interface ActivateTemplateProps {
	challangeDesc: React.ReactNode;
	challangeFAQSection: React.ReactNode;
}

const ChallangeDescContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

const ChallangeFAQSectionContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

// theme UI jsx 사용 시, sx Props 작동 안함
const ChallangeDetailTemplate = ({
	challangeDesc,
	challangeFAQSection,
}: ActivateTemplateProps) => {
	return (
		<BaseTemplate>
			<Grid sx={{ gap: [3, 4] }}>
				<ChallangeDescContainer>{challangeDesc}</ChallangeDescContainer>
				<ChallangeFAQSectionContainer>
					{challangeFAQSection}
				</ChallangeFAQSectionContainer>
			</Grid>
		</BaseTemplate>
	);
};

export default ChallangeDetailTemplate;
