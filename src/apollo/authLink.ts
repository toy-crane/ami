import { ApolloLink } from "@apollo/client";
import { isLoggedInVar } from "./cache";

type Headers = {
	authorization?: string;
};

// 매 요청마다 토큰을 실어보내는 Link
const authLink = new ApolloLink((operation, forward) => {
	const accessToken = isLoggedInVar();
	operation.setContext(({ headers }: { headers: Headers }) => ({
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : "",
		},
	}));

	return forward(operation);
});

export default authLink;
