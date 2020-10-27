import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation resetPassword(
		$password: String!
		$confirmPassword: String!
		$resetToken: String!
	) {
		resetPassword(
			password: $password
			confirmPassword: $confirmPassword
			resetToken: $resetToken
		) {
			${fragments.User}
			token
		}
	}
`;
