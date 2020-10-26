import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import MainPage from "../Routes/Main";
import FindPasswordPage from "../Routes/Auth/FindPasswordPage";
import ResetPasswordPage from "../Routes/Auth/ResetPasswordPage";

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
		<Route exact path="/find-password" component={FindPasswordPage} />
		<Route exact path="/reset-password" component={ResetPasswordPage} />
		<Redirect from="*" to="/sign-in" />
	</Switch>
);

const AppRouter = ({ isSignIn }: AppRouterProps) =>
	isSignIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
