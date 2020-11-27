import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

type PrivateRouteProps = {
	component: FC<any>;
	isLoggedIn: boolean;
	isActive: boolean;
	path: string;
};

// 로그인 필요 페이지 전용 Route
function PrivateRoute(props: PrivateRouteProps) {
	const { isLoggedIn, isActive, component: Component, ...rest } = props;
	const handleRoute = (props: any) => {
		if (isLoggedIn && isActive) {
			return <Component {...props} />;
		} else {
			return (
				<Redirect
					to={{ pathname: "/login", state: { referer: props.location } }}
				/>
			);
		}
	};
	return <Route {...rest} render={handleRoute} />;
}

export default PrivateRoute;
