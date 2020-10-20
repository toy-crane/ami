import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import { useApolloClient } from "../apollo/client";
import { useIsSignIn, withAuth } from "../services/auth";
import Header from "./Header";
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
						<Switch>
							<Route exact path="/" component={withAuth(MainPage)} />
							<Route exact path="/sign-(in|up)" component={AuthPage} />
						</Switch>
					</Wrapper>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
