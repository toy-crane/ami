import React from "react";
import styled from "@emotion/styled";

export const Alternative = styled.div`
	label {
		color: red;
	}
`;

const AuthPage = () => {
	return (
		<>
			<div>
				<a href="http://localhost:4000/github">github</a>
			</div>
			<div>
				<a href="http://localhost:4000/google">google</a>
			</div>
		</>
	);
};

export default AuthPage;
