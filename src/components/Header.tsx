import React from "react";
import { useLogout, useMe } from "../services/auth";

const Header = () => {
	const { data, loading, error } = useMe();
	const logout = useLogout();
	if (loading) {
		return <div>loading...</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
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
