import React, { useMemo } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import SignInForm from "../../components/AuthPage/SignInForm";
import SignUpForm from "../../components/AuthPage/SignUpForm";
import styled from "@emotion/styled";

export const Alternative = styled.div`
	position: fixed;
	bottom: 10px;
	left: 10px;
`;

const AuthPage = () => {
	const location = useLocation();
	const history = useHistory();
	const alternative = useMemo(() => {
		if (location.pathname === "/sign-in") {
			const handleSignUp = () => {
				history.push("/sign-up");
			};

			return (
				<Alternative>
					Don't have an account yet?{" "}
					<label onClick={handleSignUp}>Sign up!</label>
				</Alternative>
			);
		} else {
			const handleSignIn = () => {
				history.push("/sign-in");
			};

			return (
				<Alternative>
					Already have an accout? <label onClick={handleSignIn}>Sign in!</label>
				</Alternative>
			);
		}
	}, [history, location.pathname]);

	return (
		<>
			<Switch>
				<Route exact path="/sign-up" component={SignUpForm} />
				<Route exact path="/sign-in" component={SignInForm} />
			</Switch>
			{alternative}
		</>
	);
};

export default AuthPage;
