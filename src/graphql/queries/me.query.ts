import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
	query me {
		me {
			...UserFields
		}
	}
	${fragments.UserFields}
`;
