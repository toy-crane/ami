/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { AuthContainer, AuthTemplates } from "Pages/templates";

interface ActivateTemplateProps {
	title: React.ReactNode;
	content: React.ReactNode;
}

const TitleContainer: React.FC = (props) => (
	<AuthContainer sx={{ marginBottom: 4 }}>{props.children}</AuthContainer>
);

const ContentContainer: React.FC = (props) => (
	<AuthContainer>{props.children}</AuthContainer>
);

const ActivateTemplate = ({ title, content }: ActivateTemplateProps) => {
	return (
		<AuthTemplates>
			<TitleContainer>{title}</TitleContainer>
			<ContentContainer>{content}</ContentContainer>
		</AuthTemplates>
	);
};

export default ActivateTemplate;
