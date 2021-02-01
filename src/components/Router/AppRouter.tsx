import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";
import { MyPage } from "../MyPage";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { ActivateUser } from "../Auth";
import { NotFound } from "../NotFound";
import { AuthLayout, MainLayout } from "../Layout";
import { SignUp, Login } from "../Pages/Auth";

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={["/login", "/sign-up"]}>
				<Route path="/sign-up" component={SignUp} />
				<Route path="/login" component={Login} />
			</Route>
			<Route exact path={["/"]}>
				<MainLayout>
					<Route exact path="/" component={Main} />
				</MainLayout>
			</Route>
			<ActivateRoute exact path={["/activate"]}>
				<AuthLayout>
					<Route path="/activate" component={ActivateUser} />
				</AuthLayout>
			</ActivateRoute>
			<PrivateRoute exact path={["/mypage"]}>
				<MainLayout>
					<Switch>
						<Route exact path="/mypage" component={MyPage} />
					</Switch>
				</MainLayout>
			</PrivateRoute>
			<Route component={NotFound} />
		</Switch>
	);
};

export default AppRouter;
