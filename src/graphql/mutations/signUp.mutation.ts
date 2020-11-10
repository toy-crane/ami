import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation SignUp(
		$name: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		signUp(
			name: $name
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			user {
				...User
			}
		}
	}
	${fragments.User}
`;
