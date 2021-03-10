import React from "react";
import { Route } from "react-router";

const PublicRoute = ({ ...rest }: any): React.ReactElement => {
	return <Route {...rest} />;
};

export default PublicRoute;
