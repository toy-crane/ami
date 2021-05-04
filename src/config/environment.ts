type Environment = {
	serverURL: string;
	githubSignUpURL: string;
	grapqlServerURL: string;
};

const environment: Environment = {
	serverURL: process.env.REACT_APP_SERVER_URL as string,
	githubSignUpURL: `${process.env.REACT_APP_SERVER_URL}/auth/github` as string,
	grapqlServerURL: process.env.REACT_APP_GRAPHQL_SERVER_URL as string,
};

export default environment;
