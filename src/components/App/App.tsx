import React from "react";
import styled from "@emotion/styled";
import { AppRouter } from "../Router";
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
				<AppRouter></AppRouter>
			</Wrapper>
		</>
	);
}

export default App;
