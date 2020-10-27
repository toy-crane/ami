import gql from "graphql-tag";

export default gql`
	fragment User on UserPersonalData {
		name
		username
		email
	}
`;
