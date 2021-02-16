/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import BaseTemplate from "../../BaseTemplates/templates";

interface MainTemplateProps {
	hero: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ hero }) => {
	return <BaseTemplate>{hero}</BaseTemplate>;
};

export default MainTemplate;
