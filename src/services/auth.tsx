import { useLogoutMutation } from "../types/graphql-types";
import { accessTokenVar } from "../apollo/cache";
import { useEffect } from "react";

// logout custom hooks
export const useLogout = () => {
	const [logoutMutation, { data, error }] = useLogoutMutation();
	const handleLogout = () => {
		logoutMutation();
	};

	useEffect(() => {
		if (data?.logout) {
			accessTokenVar(null);
		}
	}, [data]);

	return handleLogout;
};
