import { useGetMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router-dom";

// useGetMe hooks
export const useGetMe = useGetMeQuery;
// logout hooks
export const useLogout = () => {
	const apolloClient = useApolloClient();
	const history = useHistory();
	const logout = async () => {
		await apolloClient.clearStore();
		history.push("/");
	};
	return logout;
};
