/** @jsxRuntime classic */
/** @jsx jsx */
import { RadioButton } from "components";
import { jsx, Flex } from "theme-ui";

const PaymentMethod = () => (
	<Flex>
		<RadioButton
			name="account_transfer"
			label="계좌 이체"
			checked
		></RadioButton>
	</Flex>
);

export default PaymentMethod;
