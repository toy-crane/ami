import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";
import { MyPage } from "../MyPage";
import { useGetMeQuery } from "../../types/graphql-types";
import PrivateRoute from "./PrivateRoute";
import ActivateRoute from "./ActivateRoute";
import { ActivateUser, Login, SignUp } from "../Auth";
import { NotFound } from "../NotFound";
import { AuthLayout, MainLayout } from "../Layout";

const AppRouter = () => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;
	const isActive = data?.me?.user.isActive || false;
	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<Switch>
			<Route path={["/login", "/sign-up", "activate"]} exact>
				<AuthLayout>
					<Route path="/sign-up" component={SignUp} />
					<Route path="/login" component={Login} />
					<ActivateRoute
						path="/activate"
						component={ActivateUser}
						isActive={isActive}
						isLoggedIn={isLoggedIn}
					/>
				</AuthLayout>
			</Route>
			<PrivateRoute
				exact
				isActive={isActive}
				isLoggedIn={isLoggedIn}
				path={["/mypage", "/"]}
			>
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
