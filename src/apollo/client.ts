import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../services/tokenService";
import { onError } from "@apollo/client/link/error";
import cache from "./cache";
import { ErrorResponse } from "@apollo/link-error";
import { fetchNewAccessToken } from "../services/auth";
import { fromPromise } from "apollo-link";

const errorLink = onError(
	({ graphQLErrors, networkError, operation, forward }: ErrorResponse) => {
		if (graphQLErrors)
			graphQLErrors.forEach((err) => {
				const { message, locations, path, extensions } = err;
				const errorCode =
					extensions && extensions.code ? extensions.code : null;
				console.log(
					`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} extensions: ${errorCode}`
				);
				switch (errorCode) {
					case "UNAUTHENTICATED":
						return fromPromise(
							fetchNewAccessToken()
								.then((accessToken) => {
									// Store the new tokens for your auth link
									console.log(accessToken);
									return accessToken;
								})
								.catch((error) => {
									// Handle token refresh errors e.g clear stored tokens, redirect to login, ...
									return;
								})
						)
							.filter((value) => Boolean(value))
							.flatMap(() => {
								// retry the request, returning the new observable
								return forward(operation);
							});
				}
			});
		if (networkError) console.log(`[Network error]: ${networkError}`);
	}
);

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

const client = new ApolloClient({
	link: errorLink.concat(authLink.concat(httpLink)),
	cache: cache,
});

export default client;
