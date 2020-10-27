import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	MutationResetPasswordArgs,
	useResetPasswordMutation,
} from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { resetPasswordSchema } from "./validation/schema";
import { useToken } from "../../services/tokenService";
import { useHistory } from "react-router-dom";

type ResetPasswordFromProps = {
	resetToken: String;
};

const ResetPasswordForm = ({ resetToken }: ResetPasswordFromProps) => {
	const [error, setError] = useState<string>("");
	const history = useHistory();
	const {
		register,
		handleSubmit,
		errors: ValidationErrors,
		formState,
	} = useForm<MutationResetPasswordArgs>({
		resolver: yupResolver(resetPasswordSchema),
		mode: "onChange",
	});

	const [
		resetPassword,
		{ loading, data, error: mutationError },
	] = useResetPasswordMutation();
	const { token, setToken } = useToken();

	useEffect(() => {
		if (mutationError) {
			setError(mutationError.message);
		}
		if (data && data.resetPassword.token) {
			setToken(data.resetPassword.token);
		}
	}, [mutationError, data, setToken, token]);

	useEffect(() => {
		if (token) {
			history.push("/");
		}
	}, [history, token]);

	const onSubmit = useCallback(
		async (variables) => {
			try {
				resetPassword({ variables: { ...variables, resetToken } });
			} catch (e) {
				setError(e);
			}
		},
		[resetPassword, resetToken]
	);

	return (
		<div>
			비밀번호 재설정하기
			{loading ? (
				<div>로딩중...</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
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
					<input type="submit" disabled={!formState.isValid} />
					<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
				</form>
			)}
		</div>
	);
};

export default ResetPasswordForm;
