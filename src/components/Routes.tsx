import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import MainPage from "../Routes/Main";

type AppRouterProps = {
	isLoggedIn: boolean;
};

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Redirect from="*" to="/" />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Route exact path="/sign-(in|up)" component={AuthPage} />
		<Redirect from="*" to="/sign-in" />
	</Switch>
);

const AppRouter = ({ isLoggedIn }: AppRouterProps) =>
	isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
