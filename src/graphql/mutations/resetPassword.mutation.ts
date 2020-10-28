import gql from "graphql-tag";

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
			token
		}
	}
`;
