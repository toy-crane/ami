import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import MainPage from "../Routes/Main";
import { useGetMeQuery } from "../generated/graphql";

const LoggedInRoutes = () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Redirect from="*" to="/" />
	</Switch>
);
const LoggedOutRoutes = () => (
	<Switch>
		<Route exact path="/" component={MainPage} />
		<Route exact path="/sign-(in|up)" component={AuthPage} />
		<Redirect from="*" to="/sign-in" />
	</Switch>
);

const AppRouter = () => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	if (loading) {
		return <div>loading...</div>;
	}
	return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default AppRouter;
