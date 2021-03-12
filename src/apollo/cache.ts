import { InMemoryCache, makeVar } from "@apollo/client";
import { accountStatus } from "caches";
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
				accountStatus: {
					read() {
						return {
							...accountStatus(),
							isLoggedIn: !!accessTokenVar(),
						};
					},
				},
			},
		},
	},
});
