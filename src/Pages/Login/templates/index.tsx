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
const LoginTemplate = ({ title, content }: LoginTemplateProps) => {
	return (
		<AuthTemplates>
			<TitleContainer sx={{ p: [4, 5] }}>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
		</AuthTemplates>
	);
};

export default LoginTemplate;
