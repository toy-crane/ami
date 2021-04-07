import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./Styles/Theme";
import { ApolloProvider } from "@apollo/client";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "./apollo/client";
import {
	Login,
	SignUp,
	Main,
	MyPage,
	Activate,
	NotFound,
	Checkout,
	RegisterRefundAccount,
} from "Pages";
import { ActivateRoute, PrivateRoute, PublicRoute, AuthRoute } from "Router";
import AuthCacheProvider from "caches/AuthCache";
import ChallangeDetail from "Pages/ChallangeDetail";
import GlobalStyle from "Styles/GlobalStyle";

function App() {
	const history = createBrowserHistory();
	return (
		<>
			<ApolloProvider client={client}>
				<AuthCacheProvider>
					<ThemeProvider theme={theme}>
						<GlobalStyle />
						<Router history={history}>
							<Switch>
								<PublicRoute exact path="/" component={Main} />
								<AuthRoute path="/login" component={Login} />
								<AuthRoute path="/sign-up" component={SignUp} />
								<ActivateRoute path="/register/activate" component={Activate} />
								<PublicRoute
									path="/challanges/:challangeId"
									component={ChallangeDetail}
								/>
								<PrivateRoute path="/mypage" component={MyPage} />
								<PrivateRoute
									path="/register/refund-account"
									component={RegisterRefundAccount}
								/>
								<PrivateRoute
									path="/checkout/challanges/:challangedId"
									component={Checkout}
								/>
								<PublicRoute path="*" component={NotFound} />
							</Switch>
						</Router>
					</ThemeProvider>
				</AuthCacheProvider>
			</ApolloProvider>
		</>
	);
}

export default App;
