import { InMemoryCache, makeVar } from "@apollo/client";
const isLoggedIn = makeVar(false);

export default new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						return isLoggedIn();
					},
				},
			},
		},
	},
});
