import React, { useEffect } from "react";
import { useLogout, useMe } from "../services/auth";

const Header = () => {
	const { data, loading, error } = useMe();
	const logout = useLogout();

	// 잘못된 토큰일 경우, 강제 로그아웃 시키기
	useEffect(() => {
		if (error) {
			logout();
		}
	});

	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<div>
			{data && data.me ? (
				<div>
					ID: {data.me.email} <button onClick={logout}>로그아웃</button>
				</div>
			) : null}
		</div>
	);
};

export default Header;
