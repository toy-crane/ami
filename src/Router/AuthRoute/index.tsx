import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React, { useEffect } from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";

interface AuthRouteProps extends RouteProps {}

// 로그인 시 접근 불가능한 Route
const AuthRoute = ({ ...rest }: AuthRouteProps) => {
	const { isLoggedIn } = useReactiveVar(accountInfoCache);
	let history = useHistory();

	useEffect(() => {
		if (isLoggedIn) {
			history.goBack();
		}
	});

	if (!isLoggedIn) {
		return <Route {...rest} />;
	} else {
		return <></>;
	}
};

export default AuthRoute;
