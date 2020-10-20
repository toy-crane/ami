import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../services/auth";

const MainPage = () => {
	const logout = useLogout();
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/sign-up">회원가입</Link>
				</li>
				<li>
					<Link to="/sign-in">로그인</Link>
				</li>
				<button onClick={logout}>로그아웃</button>
			</ul>
		</nav>
	);
};

export default MainPage;
