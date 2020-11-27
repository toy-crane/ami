import { useLogoutMutation } from "../types/graphql-types";
import { accessTokenVar } from "../apollo/cache";
import { useEffect, useCallback } from "react";

// logout custom hooks
export const useLogout = () => {
	const [logoutMutation, { data }] = useLogoutMutation();
	const handleLogout = useCallback(() => {
		logoutMutation();
	}, [logoutMutation]);
	useEffect(() => {
		if (data?.logout) {
			accessTokenVar(null);
		}
	}, [data]);
	return handleLogout;
};
