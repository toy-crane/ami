import React from "react";
import { AuthTemplates } from "Pages/templates";
import {
	ContentContainer,
	TitleContainer,
} from "Pages/templates/AuthTemplates";

interface ActivateTemplateProps {
	title: React.ReactNode;
	content: React.ReactNode;
}

// theme UI jsx 사용 시, sx Props 작동 안함
const ActivateTemplate = ({ title, content }: ActivateTemplateProps) => {
	return (
		<AuthTemplates>
			<TitleContainer sx={{ margin: 4 }}>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
		</AuthTemplates>
	);
};

export default ActivateTemplate;
