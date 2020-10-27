import gql from "graphql-tag";
import * as fragments from "../fragments";

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
			${fragments.User}	
		}
	}
`;
