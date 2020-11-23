import gql from "graphql-tag";

export default gql`
	fragment UserFields on User {
		name
		email
		isActive
	}
`;
