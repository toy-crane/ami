import gql from "graphql-tag";

export default gql`
	mutation confirmVerificationToken(
		$email: String!
		$verificationToken: String!
	) {
		confirmVerificationToken(
			email: $email
			verificationToken: $verificationToken
		) {
			token
		}
	}
`;
