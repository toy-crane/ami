import React from "react";
import { useLogout, useGetMe } from "../services/auth";

const Header = () => {
	const logout = useLogout();
	const { data, error } = useGetMe();
	if (error) {
		logout();
	}
	return (
		<div>
			ID: {data && data.me.email} <button onClick={logout}>로그아웃</button>
		</div>
	);
};

export default Header;
