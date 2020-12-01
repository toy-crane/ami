import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../../Routes/Main";
import MyPage from "../../Routes/MyPage";
import { useGetMeQuery } from "../../types/graphql-types";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { ActivateUser } from "../Auth";
import { Login } from "../Auth";
import { SignUp } from "../Auth";
import NotFound from "../NotFound/NotFound";

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
			<Route path="/signup" component={SignUp} />
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
			<Route path="*" component={NotFound} />
		</>
	);
};

export default AppRouter;
