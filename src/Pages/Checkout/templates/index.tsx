import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";

interface CheckoutTemplateProps {
	checkoutForm: React.ReactNode;
}

const CheckoutFormContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

// theme UI jsx 사용 시, sx Props 작동 안함
const CheckoutTemplate = ({ checkoutForm }: CheckoutTemplateProps) => {
	return (
		<BaseTemplate>
			<CheckoutFormContainer>{checkoutForm}</CheckoutFormContainer>
		</BaseTemplate>
	);
};

export default CheckoutTemplate;
