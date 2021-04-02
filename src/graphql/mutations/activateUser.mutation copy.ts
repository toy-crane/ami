import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	mutation activateUser($mobile: String!, $name: String!) {
		activateUser(mobile: $mobile, name: $name) {
			...UserFields
		}
	}
	${fragments.UserFields}
`;
