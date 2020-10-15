import { useCookies } from "react-cookie";

const TOKEN_NAME = "authToken";

// cookie에 있는 토큰을 다루는 hooks
export const useToken = () => {
	const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
	const setAuthToken = (token: string) => setCookie(TOKEN_NAME, token);
	const removeAuthToken = () => removeCookie(TOKEN_NAME);
	return [cookies[TOKEN_NAME], setAuthToken, removeAuthToken];
};
