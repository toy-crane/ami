import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import MainPage from "../Routes/Main";

type AppRouterProps = {
	isSignIn: boolean;
};

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Redirect from="*" to="/" />
	</Switch>
);

const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path="/sign-(in|up)" component={AuthPage} />
		<Redirect from="*" to="/sign-in" />
	</Switch>
);

const AppRouter = ({ isSignIn }: AppRouterProps) =>
	isSignIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
