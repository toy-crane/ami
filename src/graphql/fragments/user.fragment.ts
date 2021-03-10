import gql from "graphql-tag";

export default gql`
	fragment UserFields on User {
		id
		name
		email
		mobile
		isActive
	}
`;
