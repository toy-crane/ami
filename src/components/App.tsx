import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import { useIsUserLoggedInQuery } from "../generated/graphql";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	const { data } = useIsUserLoggedInQuery();

	return (
		<>
			{data?.isLoggedIn ? <Header /> : null}
			<Wrapper>{/* <Routes isSignIn={isSignIn}></Routes> */}</Wrapper>
		</>
	);
}

export default App;
