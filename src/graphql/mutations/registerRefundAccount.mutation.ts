import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation registerRefundAccount($bankCode: String!, $bankAccount: String!) {
		registerRefundAccount(bankCode: $bankCode, bankAccount: $bankAccount) {
			...UserFields
		}
	}
	${fragments.UserFields}
`;
