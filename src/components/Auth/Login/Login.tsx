import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Alternative = styled.div`
	label {
		color: red;
	}
`;

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
