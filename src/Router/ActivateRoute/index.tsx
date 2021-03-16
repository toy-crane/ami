import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

const ActivateRoute = ({ component: Component, ...rest }: any) => {
	const { isLoggedIn, isActive } = useReactiveVar(accountInfoCache);
	console.log(isLoggedIn, isActive);

	const handleRoute = (routeProps: RouteProps) => {
		if (isLoggedIn && !isActive) {
			return <Component {...routeProps}></Component>;
		} else {
			return (
				<Redirect
					to={{ pathname: "/", state: { referer: routeProps.location } }}
				/>
			);
		}
	};

	return <Route {...rest} render={handleRoute} />;
};

export default ActivateRoute;
