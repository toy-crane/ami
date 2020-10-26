import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MutationSignUpArgs } from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { requestPasswordResetSchema } from "./validation/schema";

const ResetPasswordForm = () => {
	const [error, setError] = useState<string>("");
	const {
		register,
		handleSubmit,
		errors: ValidationErrors,
		formState,
	} = useForm<MutationSignUpArgs>({
		resolver: yupResolver(requestPasswordResetSchema),
		mode: "onChange",
	});

	const onSubmit = useCallback(async () => {}, []);

	return (
		<div>
			비밀번호 재설정하기
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>비밀번호</label>
					<input name="password" type="password" ref={register} />
					<p>{ValidationErrors.password?.message}</p>
				</div>
				<div>
					<label>비밀번호 확인</label>
					<input name="password" type="password" ref={register} />
					<p>{ValidationErrors.password?.message}</p>
				</div>
				<input type="submit" disabled={!formState.isValid} />
				<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
			</form>
		</div>
	);
};

export default ResetPasswordForm;
