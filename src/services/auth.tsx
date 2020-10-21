import {
	useSignInMutation,
	useSignUpMutation,
	useMeQuery,
	UserPersonalData,
} from "../generated/graphql";
import { useToken } from "./tokenService";
import React from "react";
import { useHistory } from "react-router-dom";
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

const MyContext = React.createContext<UserPersonalData | null>(null);

export const withAuth = <P extends object>(
	Component: React.ComponentType<P>
) => {
	return (props: any) => {
		const { token } = useToken();
		let history = useHistory();
		if (!token) {
			history.push("/sign-in");
			return null;
		}

		const { data, error, loading } = useMeQuery();
		const logout = useLogout();
		if (loading) return null;
		if (data === undefined) return null;
		if (error || !data.me) {
			logout();
			history.push("/sign-in");
			return null;
		}

		return (
			<MyContext.Provider value={data.me}>
				<Component {...(props as P)} />
			</MyContext.Provider>
		);
	};
};
