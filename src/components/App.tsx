import React from "react";
import Header from "./Header";
import styled from "@emotion/styled";
import { useGetMeQuery, useIsUserLoggedInQuery } from "../generated/graphql";
import Routes from "./Routes";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	const { data: meData } = useGetMeQuery();
	const { data } = useIsUserLoggedInQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const email = meData?.me.email || null;

	return (
		<>
			<Header isLoggedIn={isLoggedIn} />
			<Wrapper>
				{email}
				<Routes isLoggedIn={isLoggedIn}></Routes>
			</Wrapper>
		</>
	);
}

export default App;
