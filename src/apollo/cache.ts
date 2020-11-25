import { InMemoryCache, makeVar } from "@apollo/client";
export const isLoggedInVar = makeVar(false);
export const accessTokenVar = makeVar(null);

export default new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return isLoggedInVar();
					},
				},
			},
		},
	},
});
