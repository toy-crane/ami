import React from "react";
import SignUpForm from "./SignUpForm";
import { Route, Switch } from "react-router-dom";
import SignInForm from "./SignInForm";

const AuthPage = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/sign-up" component={SignUpForm} />
				<Route exact path="/sign-in" component={SignInForm} />
			</Switch>
		</div>
	);
};

export default AuthPage;
