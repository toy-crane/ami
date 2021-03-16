/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate from "../../templates/BaseTemplates";

const LoginTemplate: React.FC = (props) => {
	return <BaseTemplate>{props.children}</BaseTemplate>;
};

export default LoginTemplate;
