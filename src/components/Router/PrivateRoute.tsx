import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useGetMeQuery } from "../../types/graphql-types";

// 로그인 필요 페이지 전용 Route
const PrivateRoute: React.FC<RouteProps> = (props) => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const isActive = data?.me?.user.isActive || false;

	if (loading) {
		return <div>loading...</div>;
	}
	const { children, ...rest } = props;
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
