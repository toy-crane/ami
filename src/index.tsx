import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { Router } from "react-router-dom";
import { history } from "./services/browserHistory";
import { ThemeProvider, Global } from "@emotion/react";
import "./index.css";
import GlobalStyles from "./Styles/GlobalStyles";

const theme = {
	colors: {
		primary: "#f6f6ff",
		gray: "#f6f6ff",
		something: "#FF0000",
	},
};

ReactDOM.render(
	<ApolloProvider client={client}>
		<Global styles={GlobalStyles} />
		<ThemeProvider theme={theme}>
			<Router history={history}>
				<App />
			</Router>
		</ThemeProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
