import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useSignUp } from "../../services/auth";
import { MutationSignUpArgs } from "../../generated/graphql";
import { ErrorMessage } from "./formComponents";
import schema from "./validation/schema";

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
