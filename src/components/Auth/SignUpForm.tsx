import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useSignUp } from "../../services/auth";
import { MutationSignUpArgs } from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { signUpSchema } from "./validation/schema";
import { useToken } from "../../services/tokenService";

const SignUpForm = () => {
	let history = useHistory();
	const [error, setError] = useState("");
	const { setToken } = useToken();
	const {
		register,
		handleSubmit,
		errors: ValidationErrors,
		formState,
	} = useForm<MutationSignUpArgs>({
		resolver: yupResolver(signUpSchema),
		mode: "onChange",
	});
	const [signUp, { loading }] = useSignUp();
	const onSubmit = useCallback(
		async (variables) => {
			try {
				const { data } = await signUp({ variables });
				if (data && data.signUp.token) {
					setToken(data.signUp.token);
				}
				history.push("/");
			} catch (error) {
				setError(error.message || error);
			}
		},
		[history, setToken, signUp]
	);
	return (
		<div>
			SignUp
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
					<input type="submit" disabled={!formState.isValid} />
					<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
				</form>
			)}
		</div>
	);
};

export default SignUpForm;
