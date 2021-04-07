import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";
import React, { useEffect } from "react";
import { Route, RouteProps, useHistory } from "react-router-dom";

interface ActivateRouteProps extends RouteProps {}

// 계정 추가 정보 입력 Route
const ActivateRoute = ({ ...rest }: ActivateRouteProps) => {
	const { isActive } = useReactiveVar(accountInfoCache);
	let history = useHistory();

	useEffect(() => {
		if (isActive) {
			history.goBack();
		}
	});

	if (!isActive) {
		return <Route {...rest} />;
	} else {
		return <></>;
	}
};

export default ActivateRoute;
