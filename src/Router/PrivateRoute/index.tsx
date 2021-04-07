import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {}

// 로그인 필요 페이지 전용 Route
const PrivateRoute = ({ location, ...rest }: PrivateRouteProps) => {
	const { isLoggedIn } = useReactiveVar(accountInfoCache);

	if (isLoggedIn) {
		return <Route {...rest} />;
	} else {
		return (
			<Redirect to={{ pathname: "/login", state: { referer: location } }} />
		);
	}
};

export default PrivateRoute;
