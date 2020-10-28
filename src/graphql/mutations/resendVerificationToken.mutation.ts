import gql from "graphql-tag";

export default gql`
	mutation resendVerificationToken($email: String!) {
		resendVerificationToken(email: $email)
	}
`;
