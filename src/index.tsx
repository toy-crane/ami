import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import client from "./apollo/client";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
	<CookiesProvider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</CookiesProvider>,
	document.getElementById("root")
);
