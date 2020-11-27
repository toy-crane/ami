import React from "react";
import styled from "@emotion/styled";
import Routes from "./Routes";

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	width: 100%;
`;

function App() {
	return (
		<>
			<Wrapper>
				<Routes></Routes>
			</Wrapper>
		</>
	);
}

export default App;
