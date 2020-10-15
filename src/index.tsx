import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/index";
import client from "./apollo/client";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
	<CookiesProvider>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<App />
			</Provider>
		</ApolloProvider>
	</CookiesProvider>,
	document.getElementById("root")
);
