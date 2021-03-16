import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./Styles/Theme";
import { ApolloProvider } from "@apollo/client";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "./apollo/client";
import { Login, SignUp, Main, MyPage } from "Pages";
import { ActivateRoute, PrivateRoute, PublicRoute } from "Router";
import AuthCacheProvider from "caches/AuthCache";

function App() {
	const history = createBrowserHistory();
	return (
		<>
			<ApolloProvider client={client}>
				<AuthCacheProvider>
					<ThemeProvider theme={theme}>
						<Router history={history}>
							<Switch>
								<PublicRoute exact path="/" component={Main} />
								<PublicRoute path="/login" component={Login} />
								<PublicRoute path="/sign-up" component={SignUp} />
								<PrivateRoute path="/mypage" component={MyPage} />
								<ActivateRoute
									path="/activate"
									component={<div>need Activate</div>}
								/>
							</Switch>
						</Router>
					</ThemeProvider>
				</AuthCacheProvider>
			</ApolloProvider>
		</>
	);
}

export default App;
