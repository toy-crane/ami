import React from "react";
import { useLogout, useMe } from "../services/auth";

const Header = () => {
	const { data } = useMe();
	const logout = useLogout();
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
