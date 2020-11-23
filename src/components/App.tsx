import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import { useIsUserLoggedInQuery } from "../generated/graphql";
import Routes from "./Routes";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	const { data, loading } = useIsUserLoggedInQuery();
	const isLoggedIn = data?.isLoggedIn || false;

	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
			<Wrapper>
				<Routes isLoggedIn={isLoggedIn}></Routes>
			</Wrapper>
		</>
	);
}

export default App;
