import { useReactiveVar } from "@apollo/client";
import { Grid, Heading } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { accountInfoCache } from "caches";
import {
	ChallangeBanner,
	CheckoutSummary,
	Spinner,
	PaymentMethod,
} from "components";
import React, { useEffect } from "react";
import { useHistory } from "react-router";

interface CheckoutFormContainerProps {
	sx?: SxStyleProp;
}

interface CheckoutFormProps extends CheckoutFormContainerProps {
	sx?: SxStyleProp;
	onSubmit: (props: any) => void;
}
const CheckoutFormContainer = () => {
	let history = useHistory();
	const { hasRBankAccount, loading } = useReactiveVar(accountInfoCache);
	const onSubmit = () => {};

	useEffect(() => {
		if (!hasRBankAccount) {
			history.push("/register/refund-account");
		}
	});

	return loading ? (
		<Spinner loading={loading}></Spinner>
	) : (
		<CheckoutForm onSubmit={onSubmit}></CheckoutForm>
	);
};

const CheckoutForm = ({ sx, onSubmit }: CheckoutFormProps) => {
	return (
		<Grid sx={{ gap: [4, 5] }}>
			<Grid sx={{ gap: 3 }}>
				<Heading variant="styles.h4">주문 세부 정보</Heading>
				<ChallangeBanner color="black" />
			</Grid>
			<Grid sx={{ gap: 3 }}>
				<Heading variant="styles.h4">결제 금액</Heading>
				<CheckoutSummary></CheckoutSummary>
			</Grid>
			<Grid sx={{ gap: 3 }}>
				<Heading variant="styles.h4">결제 방법</Heading>
				<PaymentMethod></PaymentMethod>
			</Grid>
		</Grid>
	);
};

export default CheckoutFormContainer;
export { CheckoutForm };
