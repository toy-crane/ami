import { InMemoryCache } from "@apollo/client";
import { accountInfoCache, accessTokenCache } from "caches";

export default new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				accountStatus: {
					read() {
						return {
							...accountInfoCache(),
							isLoggedIn: !!accessTokenCache(),
						};
					},
				},
			},
		},
	},
});
