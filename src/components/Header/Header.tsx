import React from "react";
import { Link } from "react-router-dom";

type HeaderProps = {
	isLoggedIn: boolean;
	email: string;
	handleLogout: any;
};

const Header = ({ isLoggedIn, email, handleLogout }: HeaderProps) => {
	return (
		<div>
			{isLoggedIn ? (
				<div>
					ID: {email}
					<button onClick={handleLogout}>로그아웃</button>
				</div>
			) : (
				<Link to="/login">로그인 하기</Link>
			)}
		</div>
	);
};

export default Header;
