import React, { useMemo } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import SignInForm from "../../components/Auth/SignInForm";
import SignUpForm from "../../components/Auth/SignUpForm";
import styled from "@emotion/styled";

export const Alternative = styled.div`
	label {
		color: red;
	}
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
					계정이 없으신가요?
					<label onClick={handleSignUp}>회원가입 바로가기</label>
				</Alternative>
			);
		} else {
			const handleSignIn = () => {
				history.push("/sign-in");
			};

			return (
				<Alternative>
					이미 계정이 있으신가요?{" "}
					<label onClick={handleSignIn}>로그인 바로가기</label>
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
