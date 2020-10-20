import {
	User,
	useSignInMutation,
	useSignUpMutation,
} from "../generated/graphql";
import { useToken } from "./tokenService";
import { useApolloClient } from "../apollo/client";
import { useContext } from "react";
import React from "react";

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
// check signIn status check hooks
export const useSignInStatus = () => {
	const { token } = useToken();
	
};

const MyContext = React.createContext<User | null>(null);

export const withAuth = <P extends object>(
	Component: React.ComponentType<P>
) => {
	return (props: any) => {
		return <Component {...(props as P)} />;
	};
};
