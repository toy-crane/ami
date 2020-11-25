import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { accessTokenVar } from "../../apollo/cache";
import { useCreateAuthTokenMutation } from "../../generated/graphql";

const SignInSuccessPage = () => {
	const [
		createAuthToken,
		{ loading, data, error },
	] = useCreateAuthTokenMutation();
	const history = useHistory();
	useEffect(() => {
		if (data) {
			const token = data.createAuthToken?.token;
			accessTokenVar(token);
		} else if (error) {
			history.push("/");
		} else {
			createAuthToken();
		}
	});
	return <></>;
};

export default SignInSuccessPage;
