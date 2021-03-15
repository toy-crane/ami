import { useLogoutMutation } from "../types/graphql-types";
import { useEffect, useCallback } from "react";
import { accessTokenCache, accountInfoCache } from "caches";
import { defaultAccountInfo } from "caches";

// logout custom hooks
export const useLogout = () => {
	const [logoutMutation, { data }] = useLogoutMutation();
	const handleLogout = useCallback(() => {
		logoutMutation();
	}, [logoutMutation]);
	useEffect(() => {
		if (data?.logout) {
			accessTokenCache(null);
			accountInfoCache(defaultAccountInfo);
		}
	}, [data]);
	return handleLogout;
};
