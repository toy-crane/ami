import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useGetMeQuery } from "../../types/graphql-types";

// user 활성화 전용 Route
const ActivateRoute: React.FC<RouteProps> = (props) => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const isActive = data?.me?.user.isActive || false;
	const { children, ...rest } = props;

	const handleRoute = (props: any) => {
		// 비활성화된 경우에만 Component rendering하도록 함.
		if (isLoggedIn && !isActive) {
			return children;
		} else {
			return (
				<Redirect to={{ pathname: "/", state: { referer: props.location } }} />
			);
		}
	};
	if (loading) {
		return <div>loading...</div>;
	}
	return <Route {...rest} render={handleRoute} />;
};

export default ActivateRoute;
