import React, { useEffect } from "react";

type headerProps = {
	email: string;
	logout: () => void;
};

const Header = ({ email, logout }: headerProps) => {
	return (
		<div>
			ID: {email} <button onClick={logout}>로그아웃</button>
		</div>
	);
};

export default Header;
