import React from "react";
import SignUpForm from "./SignUpForm";
import { Route, Switch } from "react-router-dom";

const AuthPage = () => {
	return (
		<div>
			Auth
			<Switch>
				<Route exact path="/sign-up" component={SignUpForm} />
			</Switch>
		</div>
	);
};

export default AuthPage;
