import React, { FC } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

type PrivateRouteProps = RouteProps & {
	isLoggedIn: boolean;
	isActive: boolean;
};

// 로그인 필요 페이지 전용 Route
const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
	const { children, isLoggedIn, isActive, ...rest } = props;
	const handleRoute = (props: any) => {
		if (isLoggedIn && isActive) {
			return children;
		} else {
			return (
				<Redirect
					to={{ pathname: "/login", state: { referer: props.location } }}
				/>
			);
		}
	};
	return <Route {...rest} render={handleRoute} />;
};

export default PrivateRoute;
