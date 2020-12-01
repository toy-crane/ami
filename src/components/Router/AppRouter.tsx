import React from "react";
import { Route } from "react-router-dom";
import MainPage from "../../Routes/Main";
import MyPage from "../../Routes/MyPage";
import { useGetMeQuery } from "../../types/graphql-types";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import SignUpPage from "../../Routes/Auth/SignUpPage";
import LoginPage from "../../Routes/Auth/LoginPage";
import ActivateUser from "../Auth/ActivateUser/ActivateUser";

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
			<Route path="/signup" component={SignUpPage} />
			<Route path="/login" component={LoginPage} />
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
		</>
	);
};

export default AppRouter;
