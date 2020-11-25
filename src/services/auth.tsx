import { useGetMeQuery, useLogoutMutation } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { accessTokenVar } from "../apollo/cache";
import { useCallback, useEffect } from "react";

// useGetMe hooks
export const useGetMe = useGetMeQuery;
// logout hooks
export const useLogout = () => {
	const apolloClient = useApolloClient();
	const [logoutMutation, { data, error }] = useLogoutMutation();
	const history = useHistory();

	const logout = useCallback(async () => {
		// cache 초기화
		await apolloClient.clearStore();
		// 서버 refresh token 초기화
		logoutMutation();
	}, [apolloClient, logoutMutation]);

	useEffect(() => {
		if (data?.logout) {
			console.log("logout", data);
			// 메모리에 있는 토큰 초기화
			accessTokenVar(null);
			history.push("/");
		}
	}, [data, history]);
	return logout;
};
