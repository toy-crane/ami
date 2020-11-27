import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

type ActivateRouteProps = {
	component: FC<any>;
	isLoggedIn: boolean;
	isActive: boolean;
	path: string;
};

// user 활성화 전용 Route
function ActivateRoute(props: ActivateRouteProps) {
	const { isLoggedIn, isActive, component: Component, ...rest } = props;
	const handleRoute = (props: any) => {
		if (isLoggedIn && !isActive) {
			return <Component {...props} />;
		} else {
			return (
				<Redirect to={{ pathname: "/", state: { referer: props.location } }} />
			);
		}
	};
	return <Route {...rest} render={handleRoute} />;
}

export default ActivateRoute;
