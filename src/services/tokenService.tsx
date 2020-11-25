import { useCookies } from "react-cookie";
import { useCallback } from "react";
import Cookies from "js-cookie";
import createAuthTokenMutation from "../graphql/mutations/createAuthToken.mutation";
import client from "../apollo/client";

const TOKEN_NAME = "token";

// cookie에 있는 토큰을 다루는 hooks
export const useToken = () => {
	const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);
	const token = cookies[TOKEN_NAME];
	const setToken = useCallback(
		(token: string) =>
			setCookie(TOKEN_NAME, token, { path: "/", maxAge: 86400 }),
		[setCookie]
	);
	const removeToken = useCallback(() => removeCookie("token", { path: "/" }), [
		removeCookie,
	]);
	return { token, setToken, removeToken };
};

// cookie에서 토큰을 가져오는 util 함수
export const getToken = () => {
	return Cookies.get(TOKEN_NAME);
};

// 신규 Access Token 가져오기
const fetchNewAccessToken = async () => {
	try {
		const data = await client.mutate({
			mutation: createAuthTokenMutation,
		});
		return data;
	} catch {
		throw Error("새로운 토큰을 가져오는데 실패했습니다.");
	}
};

export { fetchNewAccessToken };
