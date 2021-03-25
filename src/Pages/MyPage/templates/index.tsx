import React from "react";
import BaseTemplate from "../../templates/BaseTemplates";

const MyPageTemplate: React.FC = (props) => {
	return <BaseTemplate hasFixedHeader={true}>{props.children}</BaseTemplate>;
};

export default MyPageTemplate;
