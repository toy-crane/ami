import React from "react";
import styled from "@emotion/styled";
import Routes from "../Routes";
import { Header } from "../Header";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1600px;
	width: 100%;
`;

function App() {
	return (
		<>
			<Wrapper>
				<Header></Header>
				<Routes></Routes>
			</Wrapper>
		</>
	);
}

export default App;
