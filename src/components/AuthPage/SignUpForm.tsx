import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useSignUp } from "../../services/auth";
import { MutationSignUpArgs } from "../../generated/graphql";
import { ErrorMessage } from "./formComponents";

const schema = yup.object().shape({
	email: yup.string().email("유효한 이메일 주소가 아닙니다.").required(),
	username: yup
		.string()
		.min(6, "닉네임은 최소 6글자 이상이여야 합니다.")
		.max(20, "닉네임은 최대 20글자입니다.")
		.required(),
	name: yup
		.string()
		.min(2, "이름은 최소 2글자 이상입니다.")
		.max(20, "이름은 최대 20글자까지 입니다.")
		.required(),
	password: yup
		.string()
		.min(10, "비밀번호는 최소 10글자 이상입니다.")
		.max(256, "비밀번호는 최대 256글자까지 입니다.")
		.required(),
});

const SignUpForm = () => {
	let history = useHistory();
	const [error, setError] = useState("");
	const { register, handleSubmit, errors: ValidationErrors } = useForm<
		MutationSignUpArgs
	>({
		resolver: yupResolver(schema),
	});
	const [signUp, { loading }] = useSignUp();
	const onSubmit = useCallback(
		async (data) => {
			try {
				await signUp({ variables: data });
				history.push("/");
			} catch (error) {
				setError(error.message || error);
			}
		},
		[history, signUp]
	);
	return (
		<div>
			{loading ? (
				<div>Loading... </div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						<label>email</label>
						<input type="text" name="email" ref={register} />
						<p>{ValidationErrors.email?.message}</p>
					</div>
					<div>
						<label>username</label>
						<input type="text" name="username" ref={register} />
						<p>{ValidationErrors.username?.message}</p>
					</div>
					<div>
						<label>name</label>
						<input name="name" ref={register} />
						<p>{ValidationErrors.name?.message}</p>
					</div>
					<div>
						<label>password</label>
						<input name="password" type="password" ref={register} />
						<p>{ValidationErrors.password?.message}</p>
					</div>
					<input type="submit" />
					<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
				</form>
			)}
		</div>
	);
};

export default SignUpForm;
