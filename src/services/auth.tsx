import {
	useSignInMutation,
	useSignUpMutation,
	useMeQuery,
} from "../generated/graphql";
import { useToken } from "./tokenService";
import { useApolloClient } from "@apollo/client";

// signUp hooks
export const useSignUp = useSignUpMutation;
// signIn hooks
export const useSignIn = useSignInMutation;
// useMe hooks
export const useMe = useMeQuery;
// logout hooks
export const useLogout = () => {
	const { removeToken } = useToken();
	const apolloClient = useApolloClient();
	const logout = async () => {
		await apolloClient.clearStore();
		removeToken();
	};
	return logout;
};
// check signIn hooks
export const useIsSignIn = () => {
	const { token } = useToken();
	if (token) {
		return true;
	} else {
		return false;
	}
};
