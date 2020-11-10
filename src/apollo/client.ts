import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

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

export default new ApolloClient({
	link: errorLink.concat(httpLink),
	cache: new InMemoryCache(),
});
