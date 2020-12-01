import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Router } from "react-router-dom";
import { history } from "./services/browserHistory";
import { ThemeProvider, Global } from "@emotion/react";
import Theme from "./Styles/Theme";
import "./index.css";
import GlobalStyles from "./Styles/GlobalStyles";

ReactDOM.render(
	<ApolloProvider client={client}>
		<ThemeProvider theme={Theme}>
			<Global styles={GlobalStyles} />
			<Router history={history}>
				<App />
			</Router>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
