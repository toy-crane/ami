import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

// 로그인 필요 페이지 전용 Route
const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
	// const { data, loading } = useGetMeQuery();
	// const isLoggedIn = data?.isLoggedIn || false;
	const isLoggedIn = false;

	// if (loading) {
	// 	return <div>loading...</div>;
	// }
	const handleRoute = (props: any) => {
		if (isLoggedIn) {
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
