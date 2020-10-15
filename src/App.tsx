import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";
import { useApolloClient } from "./apollo/client";

function App() {
	const apolloClient = useApolloClient();
	return (
		<ApolloProvider client={apolloClient}>
			<Router>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/sign-(in|up)" component={AuthPage} />
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
