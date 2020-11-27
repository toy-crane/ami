import React from "react";
import { Route } from "react-router-dom";
import AuthPage from "../Routes/Auth";
import ActivateUserPage from "../Routes/Auth/ActivateUserPage";
import MainPage from "../Routes/Main";
import MyPage from "../Routes/MyPage";
import { useGetMeQuery } from "../types/graphql-types";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";

const AppRouter = () => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const isActive = data?.me.isActive || false;
	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<>
			<Route exact path="/" component={MainPage} />
			<Route path="/signup" component={AuthPage} />
			<Route path="/login" component={AuthPage} />
			<ActivateRoute
				path="/activate"
				component={ActivateUserPage}
				isActive={isActive}
				isLoggedIn={isLoggedIn}
			/>
			<PrivateRoute
				path="/mypage"
				component={MyPage}
				isActive={isActive}
				isLoggedIn={isLoggedIn}
			/>
		</>
	);
};

export default AppRouter;
