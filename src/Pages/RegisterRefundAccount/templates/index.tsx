import React from "react";
import { AuthTemplates } from "Pages/templates";
import {
	ContentContainer,
	TitleContainer,
} from "Pages/templates/AuthTemplates";

interface RefundAccountTemplateProps {
	title: React.ReactNode;
	content: React.ReactNode;
}

// theme UI jsx 사용 시, sx Props 작동 안함
const RefundAccountTemplate = ({
	title,
	content,
}: RefundAccountTemplateProps) => {
	return (
		<AuthTemplates>
			<TitleContainer sx={{ p: [3, 3] }}>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
		</AuthTemplates>
	);
};

export default RefundAccountTemplate;
