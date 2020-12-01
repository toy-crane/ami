import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { history } from "./services/browserHistory";
import "./index.css";

ReactDOM.render(
	<ApolloProvider client={client}>
		<CookiesProvider>
			<Router history={history}>
				<QueryParamProvider ReactRouterRoute={Route}>
					<App />
				</QueryParamProvider>
			</Router>
		</CookiesProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
