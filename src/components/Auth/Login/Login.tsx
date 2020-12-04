import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<>
			<div>
				로그인 페이지
				<div>
					<a href="http://localhost:4000/github">github 로그인</a>
				</div>
				<Link to="/sign-up">아직 회원이 아니신가요?</Link>
			</div>
		</>
	);
};

export default Login;
