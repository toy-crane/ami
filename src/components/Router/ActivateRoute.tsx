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
		// 비활성화된 경우에만 Component rendering하도록 함.
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
