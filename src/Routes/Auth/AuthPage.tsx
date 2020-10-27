import React, { useMemo, useCallback } from "react";
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
	const goSignUp = useCallback(() => {
		history.push("/sign-up");
	}, [history]);
	const goFindPassword = useCallback(() => {
		history.push("/find-password");
	}, [history]);
	const goSignIn = useCallback(() => {
		history.push("/sign-in");
	}, [history]);

	const alternative = useMemo(() => {
		if (location.pathname === "/sign-in") {
			return (
				<Alternative>
					<button onClick={goFindPassword}>비밀번호 찾기</button>
					<button onClick={goSignUp}>회원가입</button>
				</Alternative>
			);
		} else {
			return (
				<Alternative>
					<button onClick={goFindPassword}>비밀번호 찾기</button>
					<button onClick={goSignIn}>로그인</button>
				</Alternative>
			);
		}
	}, [goFindPassword, goSignIn, goSignUp, location.pathname]);

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
