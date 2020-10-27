import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

ReactDOM.render(
	<ApolloProvider client={client}>
		<CookiesProvider>
			<Router>
				<QueryParamProvider ReactRouterRoute={Route}>
					<App />
				</QueryParamProvider>
			</Router>
		</CookiesProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
