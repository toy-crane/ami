import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import { useApolloClient } from "./apollo/client";
import { withAuth } from "./services/auth";
function App() {
	const apolloClient = useApolloClient();
	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<Switch>
					<Route exact path="/" component={withAuth(MainPage)} />
					<Route exact path="/sign-(in|up)" component={AuthPage} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
