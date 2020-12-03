import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Router } from "react-router-dom";
import { history } from "./services/browserHistory";
import { ThemeProvider } from "theme-ui";
import "./index.css";
import Theme from "./Styles/Theme";

ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<ApolloProvider client={client}>
			<Router history={history}>
				<App />
			</Router>
		</ApolloProvider>
	</ThemeProvider>,
	document.getElementById("root")
);
