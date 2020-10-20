import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { useApolloClient } from "../apollo/client";
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
	const apolloClient = useApolloClient();
	const isSignIn = useIsSignIn();
	console.log(`로그인 상태 ${isSignIn}`);

	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<>
					{isSignIn && <Header />}
					<Wrapper>
						<Routes isSignIn={isSignIn}></Routes>
					</Wrapper>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
