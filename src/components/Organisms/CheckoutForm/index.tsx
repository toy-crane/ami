import { useReactiveVar } from "@apollo/client";
import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { accountInfoCache } from "caches";
import { Spinner } from "components";
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
	return <Box sx={sx}>checkout</Box>;
};

export default CheckoutFormContainer;
export { CheckoutForm };
