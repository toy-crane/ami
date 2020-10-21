import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
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
		<Router>
			<>
				{isSignIn && <Header />}
				<Wrapper>
					<Routes isSignIn={isSignIn}></Routes>
				</Wrapper>
			</>
		</Router>
	);
}

export default App;
