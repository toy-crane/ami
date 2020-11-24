import gql from "graphql-tag";

export default gql`
	mutation createAuthToken {
		createAuthToken {
			token
		}
	}
`;
