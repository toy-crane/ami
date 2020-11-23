import React from "react";
import { useLogout, useGetMe } from "../services/auth";

type HeaderProps = {
	isLoggedIn: boolean;
};

const Header = ({ isLoggedIn }: HeaderProps) => {
	const logout = useLogout();
	const { data, error } = useGetMe();
	if (error) {
		logout();
	}
	return (
		<div>
			{isLoggedIn ? (
				<div>
					ID: {data && data.me.email} <button onClick={logout}>로그아웃</button>
				</div>
			) : (
				<div>비로그인</div>
			)}
		</div>
	);
};

export default Header;
