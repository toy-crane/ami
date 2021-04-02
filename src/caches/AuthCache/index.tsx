import { useReactiveVar } from "@apollo/client";
import React, { useEffect } from "react";
import { useGetMeLazyQuery } from "types/graphql-types";
import { accountInfoCache, defaultAccountInfo } from "./cache";

interface AuthCacheProviderProps {
	children: React.ReactElement;
}

const AuthCacheProvider = ({ children }: AuthCacheProviderProps) => {
	const [
		getMe,
		{ data: getMeData, loading: getMeLoading, error: getMeError },
	] = useGetMeLazyQuery();
	const user = getMeData?.me?.user;
	const profile = getMeData?.me?.profile;
	const { loading } = useReactiveVar(accountInfoCache);

	// 최초 유저 정보 호출
	useEffect(() => {
		getMe();
	}, [getMe]);

	useEffect(() => {
		if (getMeError) {
			accountInfoCache({
				...accountInfoCache(),
				isError: true,
				isLoggedIn: false,
				loading: false,
				status: null,
			});
		}
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
				loading: false,
				isActive: user.isActive,
				status: user.status,
				isError: false,
			});
		}
	}, [getMeError, getMeLoading, profile, user]);

	return <>{loading ? <div>Hello</div> : children}</>;
};

export default AuthCacheProvider;
export { defaultAccountInfo, accountInfoCache };
