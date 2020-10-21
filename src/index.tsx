import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

ReactDOM.render(
	<ApolloProvider client={client}>
		<CookiesProvider>
			<App />
		</CookiesProvider>
	</ApolloProvider>,
	document.getElementById("root")
);
