/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { AuthContainer, AuthTemplates } from "Pages/templates";

interface LoginTemplateProps {
	signUp: React.ReactNode;
}
const SignUpContainer: React.FC = (props) => (
	<AuthContainer>{props.children}</AuthContainer>
);

const SignUpTemplate = ({ signUp }: LoginTemplateProps) => {
	return (
		<AuthTemplates>
			<SignUpContainer>{signUp}</SignUpContainer>
		</AuthTemplates>
	);
};

export default SignUpTemplate;
