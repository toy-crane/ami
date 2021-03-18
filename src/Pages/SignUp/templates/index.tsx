import React from "react";
import { AuthTemplates } from "Pages/templates";
import {
	ContentContainer,
	TitleContainer,
} from "Pages/templates/AuthTemplates";

interface LoginTemplateProps {
	content: React.ReactNode;
	title: React.ReactNode;
}

// theme UI jsx 사용 시, sx Props 작동 안함
const SignUpTemplate = ({ title, content }: LoginTemplateProps) => {
	return (
		<AuthTemplates>
			<TitleContainer sx={{ marginBottom: 4 }}>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
		</AuthTemplates>
	);
};

export default SignUpTemplate;
