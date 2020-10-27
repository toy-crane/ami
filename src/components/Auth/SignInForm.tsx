import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useSignIn } from "../../services/auth";
import { MutationSignInArgs } from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { signInSchema } from "./validation/schema";
import { useToken } from "../../services/tokenService";

const SignInForm = () => {
	let history = useHistory();
	const [error, setError] = useState("");
	const {
		register,
		handleSubmit,
		errors: ValidationErrors,
		formState,
	} = useForm<MutationSignInArgs>({
		resolver: yupResolver(signInSchema),
		mode: "onChange",
	});
	const [signIn, { loading, data, error: MutationError }] = useSignIn();
	const { setToken, token } = useToken();

	useEffect(() => {
		if (MutationError) {
			setError(MutationError.message);
		}
		if (data && data.signIn.token) {
			setToken(data.signIn.token);
		}
	}, [MutationError, data, setToken]);

	useEffect(() => {
		if (token) {
			history.push("/");
		}
	}, [history, token]);

	const onSubmit = useCallback(
		async (variables) => {
			signIn({ variables });
		},
		[signIn]
	);
	return (
		<div>
			{loading ? (
				<div>Loading... </div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>이메일</label>
						<input type="text" name="email" ref={register} />
						<p>{ValidationErrors.email?.message}</p>
					</div>
					<div>
						<label>비밀번호</label>
						<input name="password" type="password" ref={register} />
						<p>{ValidationErrors.password?.message}</p>
					</div>
					<input type="submit" disabled={!formState.isValid} value="로그인" />
					<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
				</form>
			)}
		</div>
	);
};

export default SignInForm;
