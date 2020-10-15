import { useCookies } from "react-cookie";

const TOKEN_NAME = "authToken";

// cookie에 있는 토큰을 다루는 hooks
export const useToken = () => {
	const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
	const token = cookies[TOKEN_NAME];
	const setToken = (token: string) => setCookie(TOKEN_NAME, token);
	const removeToken = () => removeCookie(TOKEN_NAME);
	return { token, setToken, removeToken };
};
