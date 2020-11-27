import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	query getMe {
		me {
			...UserFields
		}
		isLoggedIn @client
	}
	${fragments.UserFields}
`;
