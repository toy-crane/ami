import React, { useEffect } from "react";
import { useGetMeQuery } from "types/graphql-types";
import { accountInfoCache, defaultAccountInfo } from "./cache";

interface AuthCacheProviderProps {
	children: React.ReactElement;
}

const AuthCacheProvider = ({ children }: AuthCacheProviderProps) => {
	const { data: getMeData, loading, error } = useGetMeQuery();
	const user = getMeData?.me?.user;
	const profile = getMeData?.me?.profile;

	useEffect(() => {
		// Todo 모든 에러말고 리프레쉬 에러만 처리하도록 변경
		if (error) {
			accountInfoCache(defaultAccountInfo);
		}
		if (loading) {
			accountInfoCache({ ...accountInfoCache(), loading: true });
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
			});
		}
	}, [profile, user, loading, error]);

	return <>{children}</>;
};

export default AuthCacheProvider;
export { defaultAccountInfo, accountInfoCache };
