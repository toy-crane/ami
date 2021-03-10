import gql from "graphql-tag";

export default gql`
	query isLogin {
		isLoggedIn @client
	}
`;
