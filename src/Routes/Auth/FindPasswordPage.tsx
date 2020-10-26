import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import FindPasswordForm from "../../components/Auth/findPasswordForm";

const FindPasswordPage = () => {
	return (
		<Switch>
			<Route exact path="/find-password" component={FindPasswordForm} />
		</Switch>
	);
};

export default FindPasswordPage;
