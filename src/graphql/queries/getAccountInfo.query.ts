import gql from "graphql-tag";

export default gql`
	query getAccountInfo {
		AccountInfo @client {
			email
			id
			avatar
			githubUrl
			name
			isLoggedIn
		}
	}
`;
