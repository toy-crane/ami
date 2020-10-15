import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainPage from "./components/MainPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={MainPage} />
				<Route exact path="/sign-(in|up)" component={AuthPage} />
			</Switch>
		</Router>
	);
}

export default App;
