import React, { useEffect } from "react";
import { useGetMeQuery } from "types/graphql-types";
import { accountInfoCache } from "./cache";

interface AuthCacheProviderProps {
	children: React.ReactElement;
}

const AuthCacheProvider = ({ children }: AuthCacheProviderProps) => {
	const { data: getMeData, loading } = useGetMeQuery();
	const user = getMeData?.me?.user;
	const profile = getMeData?.me?.profile;

	useEffect(() => {
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
	}, [profile, user, loading]);

	return <>{children}</>;
};

export default AuthCacheProvider;
