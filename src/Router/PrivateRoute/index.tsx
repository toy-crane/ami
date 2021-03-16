import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

// 로그인 필요 페이지 전용 Route
const PrivateRoute = ({ component: Component, ...rest }: any) => {
	const { isLoggedIn } = useReactiveVar(accountInfoCache);

	const handleRoute = (routeProps: RouteProps) => {
		if (isLoggedIn) {
			return <Component {...routeProps}></Component>;
		} else {
			return (
				<Redirect
					to={{ pathname: "/login", state: { referer: routeProps.location } }}
				/>
			);
		}
	};

	return <Route {...rest} render={handleRoute} />;
};

export default PrivateRoute;
