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

	return (
		<>
			{data ? (
				<>
					<Header isLoggedIn={data.isLoggedIn} />
					<Wrapper>
						<Routes isLoggedIn={data.isLoggedIn}></Routes>
					</Wrapper>
				</>
			) : (
				"loading..."
			)}
		</>
	);
}

export default App;
