import React from "react";
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import { withAuth } from "../services/auth";
import { Switch, Route, Redirect } from "react-router-dom";

type AppRouterProps = {
	isSignIn: boolean;
};

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path="/" component={withAuth(MainPage)} />
		<Redirect from="*" to="/" />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path="/" component={AuthPage} />
		<Redirect from="*" to="/" />
	</Switch>
);

const AppRouter = ({ isSignIn }: AppRouterProps) =>
	isSignIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
