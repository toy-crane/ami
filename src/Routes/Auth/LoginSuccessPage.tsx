import React, { useEffect } from "react";
import { useCreateAuthTokenMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";
import { accessTokenVar } from "../../apollo/cache";

const LoginSuccessPage = () => {
	const [
		createAuthToken,
		{ data, error, loading },
	] = useCreateAuthTokenMutation();
	const history = useHistory();

	useEffect(() => {
		createAuthToken();
		if (data && data.createAuthToken && data.createAuthToken.token) {
			// cache 업데이트 (자동으로 상태가 바뀌면서 메인 페이지로 이동함)
			accessTokenVar(data.createAuthToken.token);
		}
		if (error) {
			history.push("/sign-in");
		}
	}, [createAuthToken, data, error, history]);

	return (
		<>
			<div>로그인 성공</div>
		</>
	);
};

export default LoginSuccessPage;
