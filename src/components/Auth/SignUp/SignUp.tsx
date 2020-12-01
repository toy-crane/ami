import React from "react";
import styled from "@emotion/styled";

export const Alternative = styled.div`
	label {
		color: red;
	}
`;

const SignUp = () => {
	return (
		<>
			회원 가입 페이지
			<div>
				<a href="http://localhost:4000/github">github으로 회원가입하기</a>
			</div>
		</>
	);
};

export default SignUp;
