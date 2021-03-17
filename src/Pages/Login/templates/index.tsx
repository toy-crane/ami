/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { AuthContainer, AuthTemplates } from "Pages/templates";

interface LoginTemplateProps {
	login: React.ReactNode;
}
const LoginContainer: React.FC = (props) => (
	<AuthContainer>{props.children}</AuthContainer>
);

const LoginTemplate = ({ login }: LoginTemplateProps) => {
	return (
		<AuthTemplates>
			<LoginContainer>{login}</LoginContainer>
		</AuthTemplates>
	);
};

export default LoginTemplate;
