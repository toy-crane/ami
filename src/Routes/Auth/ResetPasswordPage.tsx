import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ResetPasswordForm from "../../components/Auth/ResetPasswordForm";

const ResetPasswordPage = () => {
	return (
		<Switch>
			<Route exact path="/reset-password" component={ResetPasswordForm} />
		</Switch>
	);
};

export default ResetPasswordPage;
