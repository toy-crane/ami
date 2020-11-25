import { useGetMeQuery } from "../generated/graphql";
import { useToken } from "./tokenService";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";

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
