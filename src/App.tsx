import React from "react";
import { AppRouter } from "./components/Router";
import { ThemeProvider } from "theme-ui";
import theme from "./Styles/Theme";
import { ApolloProvider } from "@apollo/client";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import client from "./apollo/client";

function App() {
	const history = createBrowserHistory();
	return (
		<>
			<ThemeProvider theme={theme}>
				<ApolloProvider client={client}>
					<Router history={history}>
						<AppRouter></AppRouter>
					</Router>
				</ApolloProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
