import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useSignIn } from "../../services/auth";
import { MutationSignInArgs } from "../../generated/graphql";
import { ErrorMessage } from "./formComponents";
import { signInSchema } from "./validation/schema";

const SignInForm = () => {
	let history = useHistory();
	const [error, setError] = useState("");
	const { register, handleSubmit, errors: ValidationErrors } = useForm<
		MutationSignInArgs
	>({
		resolver: yupResolver(signInSchema),
	});
	const [signIn, { loading }] = useSignIn();
	const onSubmit = useCallback(
		async (data) => {
			try {
				await signIn({ variables: data });
				history.push("/");
			} catch (error) {
				setError(error.message || error);
			}
		},
		[history, signIn]
	);
	return (
		<div>
			Sign-In
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

export default SignInForm;
