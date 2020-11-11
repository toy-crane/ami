import React from "react";
import { useIsSignIn } from "../services/auth";
import Header from "./Header";
import Routes from "./Routes";
import styled from "@emotion/styled";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	const isSignIn = useIsSignIn();

	return (
		<>
			{isSignIn ? <Header /> : null}
			<Wrapper>
				<Routes isSignIn={isSignIn}></Routes>
			</Wrapper>
		</>
	);
}

export default App;
