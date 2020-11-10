import React, { useEffect } from "react";
import { useIsSignIn, useLogout } from "../services/auth";
import Header from "./Header";
import Routes from "./Routes";
import styled from "@emotion/styled";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	const { isSignIn, data, loading, error } = useIsSignIn();

	const logout = useLogout();
	// 잘못된 토큰일 경우, 강제 로그아웃 시키기
	useEffect(() => {
		if (error) {
			console.log(error);
			logout();
		}
	});

	return (
		<>
			{isSignIn && data && data.me.email && (
				<Header email={data?.me.email} logout={logout} />
			)}
			<Wrapper>
				<Routes isSignIn={isSignIn}></Routes>
			</Wrapper>
		</>
	);
}

export default App;
