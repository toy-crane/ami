import React from "react";
import { Route } from "react-router";

const PublicRoute = ({
	component: Component,
	...rest
}: any): React.ReactElement => {
	return <Route {...rest} render={() => <Component />} />;
};

export default PublicRoute;
