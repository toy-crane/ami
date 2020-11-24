import { setContext } from "@apollo/client/link/context";
import { isLoggedInVar } from "./cache";

const authLink = setContext((_, { headers }) => {
	const token = isLoggedInVar();
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

export default authLink;
