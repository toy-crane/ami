import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ResetPasswordForm from "../../components/Auth/ResetPasswordForm";
import { useQueryParam, StringParam } from "use-query-params";

const ResetPasswordPage = () => {
	const [resetToken] = useQueryParam("resetToken", StringParam);
	return (
		<Switch>
			{resetToken ? (
				<Route exact path="/reset-password">
					<ResetPasswordForm resetToken={resetToken} />
				</Route>
			) : (
				<div>잘못된 접근입니다.</div>
			)}
		</Switch>
	);
};

export default ResetPasswordPage;
