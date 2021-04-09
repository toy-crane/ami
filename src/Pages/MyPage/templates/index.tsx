import { Container } from "components";
import React from "react";
import BaseTemplate from "../../templates/BaseTemplates";

interface MyPageTemplateProps {
	content: React.ReactNode;
}

const MyPageTemplate = ({ content }: MyPageTemplateProps) => {
	return (
		<BaseTemplate>
			<Container sx={{ mt: 4 }}>{content}</Container>
		</BaseTemplate>
	);
};

export default MyPageTemplate;
