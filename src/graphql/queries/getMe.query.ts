import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	query getMe {
		me {
			user {
				...UserFields
			}
			profile {
				avatar
				githubUrl
			}
		}
		isLoggedIn @client
	}
	${fragments.UserFields}
`;
