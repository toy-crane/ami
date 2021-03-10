import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { SignUp, Login } from "../../Pages/Auth";
import { NotFound } from "../../Pages/Common";
import { Main, MyPage } from "../../Pages";

const AppRouter = () => {
	return (
		<Switch>
			<Route exact path={["/login", "/sign-up", "/"]}>
				<Route path="/sign-up" component={SignUp} />
				<Route path="/login" component={Login} />
				<Route exact path="/" component={Main} />
			</Route>
			<PrivateRoute exact path={["/mypage"]}>
				<Route exact path="/mypage" component={MyPage} />
			</PrivateRoute>
			<Route component={NotFound} />
		</Switch>
	);
};

export default AppRouter;
