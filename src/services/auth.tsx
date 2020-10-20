import { useSignInMutation, useSignUpMutation } from "../generated/graphql";
import { useToken } from "./tokenService";
import { useApolloClient } from "../apollo/client";

// signUp hooks
export const useSignUp = useSignUpMutation;
// signIn hooks
export const useSignIn = useSignInMutation;
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
