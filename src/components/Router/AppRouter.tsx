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
			<Route path={["/login", "/sign-up", "activate"]}>
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
			{/* Header가 필요한 URL  */}
			<Route>
				<MainLayout>
					<Switch>
						<PrivateRoute
							path="/mypage"
							component={MyPage}
							isActive={isActive}
							isLoggedIn={isLoggedIn}
						/>
						<Route exact path="/" component={Main} />
						<Route component={NotFound} />
					</Switch>
				</MainLayout>
			</Route>
		</Switch>
	);
};

export default AppRouter;
