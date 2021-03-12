import React, { useEffect } from "react";
import { useGetMeLazyQuery } from "types/graphql-types";
import { useReactiveVar } from "@apollo/client";
import accountInfoCache from "./cache";

interface AuthCacheProviderProps {
	children: React.ReactElement;
}

const AuthCacheProvider = ({ children }: AuthCacheProviderProps) => {
	// cache에서 로그인 여부 조회
	const accountInfo = useReactiveVar(accountInfoCache);
	const isLoggedIn = accountInfo.isLoggedIn;

	const [getMe, { data: getMeData }] = useGetMeLazyQuery();
	const user = getMeData?.me?.user;
	const profile = getMeData?.me?.profile;
	console.log(isLoggedIn, accountInfo);

	useEffect(() => {
		// 로그인 상태가 아닐 때, refresh 토큰으로 access token refresh 시도
		if (!isLoggedIn) {
			getMe();
		}
	}, [getMe, isLoggedIn]);

	useEffect(() => {
		// 서버에서 신규 user와 profile 정보를 받아와서 cache 업데이트
		if (user && profile) {
			accountInfoCache({
				...accountInfoCache(),
				email: user.email,
				id: user.id,
				name: user.name,
				isLoggedIn: true,
				avatar: profile.avatar,
				githubUrl: profile.githubUrl,
			});
		}
	}, [profile, user]);

	return <>{children}</>;
};

export default AuthCacheProvider;
