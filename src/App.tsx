import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./Styles/Theme";
import { ApolloProvider } from "@apollo/client";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "./apollo/client";
import { Login, SignUp, Main, MyPage } from "Pages";
import { PrivateRoute, PublicRoute } from "Router";

function App() {
	const history = createBrowserHistory();
	return (
		<>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<Router history={history}>
						<Switch>
							<PublicRoute exact path="/" component={Main}></PublicRoute>
							<PublicRoute path="/login" component={Login}></PublicRoute>
							<PublicRoute path="/sign-up" component={SignUp}></PublicRoute>
							<PrivateRoute path="/mypage" component={MyPage}></PrivateRoute>
						</Switch>
					</Router>
				</ApolloProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
