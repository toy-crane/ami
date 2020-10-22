import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../services/tokenService";

const httpLink = createHttpLink({
	uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
	const token = getToken();
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});
export default new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
