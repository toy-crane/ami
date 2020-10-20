import { useCookies } from "react-cookie";
import { useCallback } from "react";

const TOKEN_NAME = "authToken";

// cookie에 있는 토큰을 다루는 hooks
export const useToken = () => {
	const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
	const token = cookies[TOKEN_NAME];
	const setToken = useCallback(
		(token: string) => setCookie(TOKEN_NAME, token),
		[setCookie]
	);
	const removeToken = useCallback(() => removeCookie(TOKEN_NAME), [
		removeCookie,
	]);
	return { token, setToken, removeToken };
};
