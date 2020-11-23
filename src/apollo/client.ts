import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../services/tokenService";
import { onError } from "@apollo/client/link/error";
import cache from "./cache";

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = createHttpLink({
	uri: "http://localhost:4000/graphql",
	credentials: "include",
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
	link: errorLink.concat(authLink.concat(httpLink)),
	cache: cache,
});
