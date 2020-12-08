import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";
import { MyPage } from "../MyPage";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { ActivateUser, Login, SignUp } from "../Auth";
import { NotFound } from "../NotFound";
import { AuthLayout, MainLayout } from "../Layout";

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={["/login", "/sign-up"]}>
				<AuthLayout>
					<Route path="/sign-up" component={SignUp} />
					<Route path="/login" component={Login} />
				</AuthLayout>
			</Route>
			<ActivateRoute exact path={["/activate"]}>
				<AuthLayout>
					<Route path="/activate" component={ActivateUser} />
				</AuthLayout>
			</ActivateRoute>
			<PrivateRoute exact path={["/mypage", "/"]}>
				<MainLayout>
					<Switch>
						<Route exact path="/mypage" component={MyPage} />
						<Route exact path="/" component={Main} />
					</Switch>
				</MainLayout>
			</PrivateRoute>
			<Route component={NotFound} />
		</Switch>
	);
};

export default AppRouter;
