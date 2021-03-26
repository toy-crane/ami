import React from "react";
import BaseTemplate from "Pages/templates/BaseTemplates";
import { Container } from "components";

interface CheckoutTemplateProps {
	challangeBanner: React.ReactNode;
	checkoutForm: React.ReactNode;
}

const ChallangeBannerContainer: React.FC = (props) => (
	<Container p={[4, 5]} baseColor="gray80">
		{props.children}
	</Container>
);

const CheckoutFormContainer: React.FC = (props) => (
	<Container>{props.children}</Container>
);

// theme UI jsx 사용 시, sx Props 작동 안함
const CheckoutTemplate = ({
	challangeBanner,
	checkoutForm,
}: CheckoutTemplateProps) => {
	return (
		<BaseTemplate>
			<ChallangeBannerContainer>{challangeBanner}</ChallangeBannerContainer>
			<CheckoutFormContainer>{checkoutForm}</CheckoutFormContainer>
		</BaseTemplate>
	);
};

export default CheckoutTemplate;
