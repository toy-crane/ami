import React from "react";
import { useLogout, useMe } from "../services/auth";

const Header = () => {
	const logout = useLogout();
	const { data, error } = useMe();
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
