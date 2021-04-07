import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

type AccountStatus = "SIGN_UP" | "ACTIVATED" | "ACCOUNT_REGISTERED";
enum RedirectPath {
	SIGN_UP = "/register/activate",
	ACTIVATED = "/register/refund-account",
	ACCOUNT_REGISTERED = "/list",
}
interface PrivateRouteProps extends RouteProps {
	accessibleStatus?: AccountStatus;
}

// 로그인 필요 페이지 전용 Route
const PrivateRoute = ({
	accessibleStatus,
	location,
	...rest
}: PrivateRouteProps) => {
	const { isLoggedIn, status: accoutStatus } = useReactiveVar(accountInfoCache);
	console.log(location);

	if (isLoggedIn && accessibleStatus === accoutStatus) {
		return <Route {...rest} />;
	} else if (isLoggedIn) {
		return (
			<Redirect
				to={{
					pathname: accoutStatus ? RedirectPath[accoutStatus] : "/sign-up",
					state: { referer: location },
				}}
			/>
		);
	} else {
		return (
			<Redirect to={{ pathname: "/login", state: { referer: location } }} />
		);
	}
};

export default PrivateRoute;
