import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";
import { MyPage } from "../MyPage";
import { useGetMeQuery } from "../../types/graphql-types";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { ActivateUser, Login, SignUp } from "../Auth";
import { NotFound } from "../NotFound";

const AppRouter = () => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const isActive = data?.me.isActive || false;
	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/sign-up" component={SignUp} />
			<Route path="/login" component={Login} />
			<ActivateRoute
				path="/activate"
				component={ActivateUser}
				isActive={isActive}
				isLoggedIn={isLoggedIn}
			/>
			<PrivateRoute
				path="/mypage"
				component={MyPage}
				isActive={isActive}
				isLoggedIn={isLoggedIn}
			/>
			<Route component={NotFound} />
		</Switch>
	);
};

export default AppRouter;
