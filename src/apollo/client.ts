import { ApolloClient, from, createHttpLink } from "@apollo/client";
import cache from "./cache";
import authLink from "./authLink";
import errorLink from "./errorLink";

const httpLink = createHttpLink({
	uri: "http://localhost:5000/api/graphql",
	credentials: "include",
});

const client = new ApolloClient({
	link: from([errorLink, authLink, httpLink]),
	cache: cache,
});

export default client;
