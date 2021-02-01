import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";
import { MyPage } from "../MyPage";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { NotFound } from "../NotFound";
import { MainLayout } from "../Layout";
import { SignUp, Login } from "../Pages/Auth";
import ActivateUser from "../Pages/Auth/ActivateUser/ActivateUser";

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
				<Route path="/activate" component={ActivateUser} />
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
