import { InMemoryCache, makeVar } from "@apollo/client";
const isLoggedIn = makeVar(false);

export default new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				isLoggedIn: {
					read() {
						console.log("hello", isLoggedIn());
						return isLoggedIn();
					},
				},
			},
		},
	},
});
