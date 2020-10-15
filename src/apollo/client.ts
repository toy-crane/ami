import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useToken } from "../services/tokenService";

const httpLink = createHttpLink({
	uri: "http://localhost:4000/graphql",
});

const authMiddleware = (token: string) => {
	// token이 있으면 요청마다 항상 token을 실어서 보낸다.
	console.log(`token is ${token}`);
	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,
				authorization: token ? `Bearer ${token}` : "",
			},
		};
	});
	return authLink;
};

export const useApolloClient = () => {
	const [token] = useToken();
	return new ApolloClient({
		link: authMiddleware(token).concat(httpLink),
		cache: new InMemoryCache(),
	});
};

export default useApolloClient;
