import { useGetMeQuery } from "../generated/graphql";
import { useToken } from "./tokenService";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";
import client from "../apollo/client";
import createAuthTokenMutation from "../graphql/mutations/createAuthToken.mutation";
import { exception } from "console";
// useGetMe hooks
export const useGetMe = useGetMeQuery;
// logout hooks
export const useLogout = () => {
	const { removeToken } = useToken();
	const apolloClient = useApolloClient();
	const history = useHistory();
	const logout = async () => {
		await apolloClient.clearStore();
		removeToken();
		history.push("/");
	};
	return logout;
};

const createAuthTokenRequest = () =>
	client.mutate({
		mutation: createAuthTokenMutation,
	});

// 신규 Access Token 가져오기
const fetchNewAccessToken = async () => {
	try {
		const { data } = await createAuthTokenRequest();
		if (data && data.createAuthToken) {
			return data.createAuthToken.token;
		}
	} catch {
		throw Error("새로운 토큰을 가져오는데 실패했습니다.");
	}
};

export { fetchNewAccessToken };
