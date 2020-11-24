import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "../services/tokenService";
import { onError } from "@apollo/client/link/error";
import cache from "./cache";
import { ErrorResponse } from "@apollo/link-error";

const errorLink = onError(({ graphQLErrors, networkError }: ErrorResponse) => {
	if (graphQLErrors)
		graphQLErrors.forEach((err) => {
			const { message, locations, path, extensions } = err;
			const errorCode = extensions && extensions.code ? extensions.code : null;
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path} extensions: ${errorCode}`
			);
			switch (errorCode) {
				case "UNAUTHENTICATED":
					console.log("인증 에러 발생");
			}
		});
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
