import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import MainPage from "../Routes/Main";
import FindPasswordPage from "../Routes/Auth/FindPasswordPage";
import ResetPasswordPage from "../Routes/Auth/ResetPasswordPage";
import CheckVerificationEmailPage from "../Routes/Auth/CheckVerificationEmailPage";
import ConfirmVerificationEmailPage from "../Routes/Auth/ConfirmVerificationEmailPage";

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
		<Route
			exact
			path="/check-verification-email"
			component={CheckVerificationEmailPage}
		/>
		<Route
			exact
			path="/confirm-verification"
			component={ConfirmVerificationEmailPage}
		/>
		<Redirect from="*" to="/sign-in" />
	</Switch>
);

const AppRouter = ({ isSignIn }: AppRouterProps) =>
	isSignIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

export default AppRouter;
