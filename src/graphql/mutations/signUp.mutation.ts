import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation SignUp(
		$name: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
		$username: String!
	) {
		signUp(
			name: $name
			email: $email
			password: $password
			confirmPassword: $confirmPassword
			username: $username
		) {
			token
			${fragments.User}	
		}
	}
`;
