import { useLogoutMutation } from "../types/graphql-types";
import { useEffect, useCallback } from "react";
import { accessTokenCache } from "caches";

// logout custom hooks
export const useLogout = () => {
	const [logoutMutation, { data }] = useLogoutMutation();
	const handleLogout = useCallback(() => {
		logoutMutation();
	}, [logoutMutation]);
	useEffect(() => {
		if (data?.logout) {
			accessTokenCache(null);
		}
	}, [data]);
	return handleLogout;
};
