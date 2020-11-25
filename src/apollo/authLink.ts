import { setContext } from "@apollo/client/link/context";
import { accessTokenVar } from "./cache";

type Headers = {
	authorization?: string;
};

// 매 요청마다 토큰을 실어보내는 Link
const authLink = setContext((_, { headers }: { headers: Headers }) => {
	const accessToken = accessTokenVar();
	const modifiedHeader = {
		headers: {
			...headers,
			authorization: accessToken ? `Bearer ${accessToken}` : "",
		},
	};
	return modifiedHeader;
});

export default authLink;