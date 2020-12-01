import React from "react";
import styled from "@emotion/styled";
import { AppRouter } from "../Router";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1600px;
	width: 100%;
`;

function App() {
	return (
		<>
			<Wrapper>
				<AppRouter></AppRouter>
			</Wrapper>
		</>
	);
}

export default App;
