import { setContext } from "@apollo/client/link/context";
import { isLoggedInVar } from "./cache";

type Headers = {
	authorization?: string;
};

// 매 요청마다 토큰을 실어보내는 Link
const authLink = setContext((_, { headers }: { headers: Headers }) => {
	const accessToken = isLoggedInVar();
	return {
		headers: {
			...headers,
			authorization: `Bearer ${accessToken}`,
		},
	};
});

export default authLink;
