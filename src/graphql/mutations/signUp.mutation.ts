import gql from "graphql-tag";

export default gql`
	mutation SignUp(
		$name: String!
		$email: String!
		$password: String!
		$username: String!
	) {
		signUp(
			name: $name
			email: $email
			password: $password
			username: $username
		) {
			token
			user {
				name
				username
				email
			}
		}
	}
`;
