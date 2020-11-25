import { InMemoryCache, makeVar } from "@apollo/client";
export const isLoggedInVar = makeVar(false);
export const accessTokenVar = makeVar<null | string>(null);

export default new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return !!accessTokenVar();
					},
				},
			},
		},
	},
});
