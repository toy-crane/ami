import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useSignUp } from "../../services/auth";
import { MutationSignUpArgs } from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { signUpSchema } from "./validation/schema";

const SignUpForm = () => {
	const [error, setError] = useState<string>("");
	const history = useHistory();
	const {
		register,
		handleSubmit,
		errors: ValidationErrors,
		formState,
	} = useForm<MutationSignUpArgs>({
		resolver: yupResolver(signUpSchema),
		mode: "onChange",
	});
	const [signUp, { loading, data, error: MutationError }] = useSignUp({
		errorPolicy: "all",
	});

	useEffect(() => {
		if (MutationError) {
			setError(MutationError.message);
		}
		if (data && data.signUp && data.signUp.user) {
			localStorage.setItem("tempEmail", data.signUp.user.email);
			history.push("/check-verification-email");
		}
	}, [MutationError, data, history]);

	const onSubmit = useCallback(
		async (variables) => {
			try {
				signUp({ variables });
			} catch (error) {
				setError(error.message || error);
			}
		},
		[signUp]
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
						<label>닉네임</label>
						<input type="text" name="username" ref={register} />
						<p>{ValidationErrors.username?.message}</p>
					</div>
					<div>
						<label>이름</label>
						<input name="name" ref={register} />
						<p>{ValidationErrors.name?.message}</p>
					</div>
					<div>
						<label>비밀번호</label>
						<input name="password" type="password" ref={register} />
						<p>{ValidationErrors.password?.message}</p>
					</div>
					<div>
						<label>비밀번호 확인</label>
						<input name="confirmPassword" type="password" ref={register} />
						<p>{ValidationErrors.confirmPassword?.message}</p>
					</div>
					<input
						type="submit"
						disabled={!formState.isValid}
						value="회원 가입"
					/>
					<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
				</form>
			)}
		</div>
	);
};

export default SignUpForm;
