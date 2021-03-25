import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";

interface ActivateTemplateProps {
	challangeDesc: React.ReactNode;
}

const ChallangeDescContainer: React.FC = (props) => (
	<Container py={[4, 5]}>{props.children}</Container>
);

// theme UI jsx 사용 시, sx Props 작동 안함
const ChallangeDetailTemplate = ({ challangeDesc }: ActivateTemplateProps) => {
	return (
		<BaseTemplate>
			<ChallangeDescContainer>{challangeDesc}</ChallangeDescContainer>
		</BaseTemplate>
	);
};

export default ChallangeDetailTemplate;
