import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Pages/Intro";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { MainLayout } from "../Layout";
import { SignUp, Login } from "../Pages/Auth";
import ActivateUser from "../Pages/Auth/ActivateUser/ActivateUser";
import { NotFound } from "../Pages/Common";
import { MyPage } from "../Pages/Me";

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={["/login", "/sign-up", "/"]}>
				<Route path="/sign-up" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route exact path="/" component={Main} />
			</Route>
			<ActivateRoute exact path={["/activate"]}>
				<Route path="/activate" component={ActivateUser} />
			</ActivateRoute>
			<PrivateRoute exact path={["/mypage"]}>
				<Route exact path="/mypage" component={MyPage} />
			</PrivateRoute>
			<Route component={NotFound} />
		</Switch>
	);
};

export default AppRouter;
