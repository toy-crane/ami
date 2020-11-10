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
	const { data, loading, error } = useMe();
	if (data && data?.me.isActive && data.me.email) {
		return { isSignIn: true, data, loading, error };
	} else {
		return { isSignIn: false, data, loading, error };
	}
};
