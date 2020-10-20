import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import { useApolloClient } from "../apollo/client";
import { useIsSignIn, withAuth } from "../services/auth";
import Header from "./Header";
function App() {
	const apolloClient = useApolloClient();
	const isSignIn = useIsSignIn();
	console.log(`로그인 상태 ${isSignIn}`);

	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<>
					{isSignIn && <Header />}
					<Switch>
						<Route exact path="/" component={withAuth(MainPage)} />
						<Route exact path="/sign-(in|up)" component={AuthPage} />
					</Switch>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
