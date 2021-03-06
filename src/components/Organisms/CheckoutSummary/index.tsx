/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx, Flex, Text } from "theme-ui";

const CheckoutSummary = () => (
	<Grid sx={{ gap: 2 }}>
		<Flex sx={{ justifyContent: "space-between" }}>
			<Text>예치금</Text>
			<Text>100,000</Text>
		</Flex>
		<Flex sx={{ justifyContent: "space-between" }}>
			<Text>플랫폼 수수료</Text>
			<Text>5,000</Text>
		</Flex>
		<Flex sx={{ justifyContent: "space-between" }}>
			<Text>총 결제 금액</Text>
			<Text>105,000</Text>
		</Flex>
	</Grid>
);

export default CheckoutSummary;
