import { ApolloClient, from, createHttpLink } from "@apollo/client";
import cache from "./cache";
import authLink from "./authLink";
import errorLink from "./errorLink";
import { environment } from "config";

const httpLink = createHttpLink({
	uri: environment.grapqlServerURL,
	credentials: "include",
});

const client = new ApolloClient({
	link: from([errorLink, authLink, httpLink]),
	cache: cache,
});

export default client;
