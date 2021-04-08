import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";

interface TransferGuideTemplateProps {
	content: React.ReactNode;
}

// theme UI jsx 사용 시, sx Props 작동 안함
const CheckoutTemplate = ({ content }: TransferGuideTemplateProps) => {
	return (
		<BaseTemplate>
			<Container sx={{ mt: 4 }}>{content}</Container>
		</BaseTemplate>
	);
};

export default CheckoutTemplate;
