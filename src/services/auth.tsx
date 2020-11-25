import { useGetMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { accessTokenVar } from "../apollo/cache";

// useGetMe hooks
export const useGetMe = useGetMeQuery;
// logout hooks
export const useLogout = () => {
	const apolloClient = useApolloClient();
	const history = useHistory();
	const logout = async () => {
		// cache 초기화
		await apolloClient.clearStore();
		// 메모리에 있는 토큰 초기화
		accessTokenVar(null);
		history.push("/");
	};
	return logout;
};
