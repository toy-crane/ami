import gql from "graphql-tag";

export default gql`
	mutation requestPasswordReset($email: String!) {
		requestPasswordReset(email: $email) {
			email
		}
	}
`;
