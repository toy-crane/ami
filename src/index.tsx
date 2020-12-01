import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Router } from "react-router-dom";
import { history } from "./services/browserHistory";
import "./index.css";

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router history={history}>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById("root")
);
