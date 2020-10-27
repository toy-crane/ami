import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	MutationSignUpArgs,
	useRequestPasswordResetMutation,
} from "../../generated/graphql";
import { ErrorMessage } from "./ErrorMessage";
import { requestPasswordResetSchema } from "./validation/schema";
import { useHistory } from "react-router-dom";

const FindPasswordForm = () => {
	let history = useHistory();
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
	const [
		requestPasswordReset,
		{ data, loading, error: MutationError },
	] = useRequestPasswordResetMutation();

	useEffect(() => {
		if (MutationError) {
			setError(MutationError?.message);
		}
	}, [MutationError, data, history]);

	const onSubmit = useCallback(
		async (variables) => {
			try {
				requestPasswordReset({ variables });
			} catch (error) {
				setError(error.message || error);
			}
		},
		[requestPasswordReset]
	);

	if (loading) {
		return <div>로딩중...</div>;
	} else if (data && data.requestPasswordReset) {
		const email = data.requestPasswordReset.email;
		return (
			<>
				<div>이메일이 전송되었습니다!</div>
				<div>{email}로 비밀번호 안내 메일을 보내드렸습니다.</div>
				<button onClick={() => history.push("/")}>홈으로 가기</button>
			</>
		);
	} else {
		return (
			<div>
				비밀번호 찾기
				{loading ? (
					<div>Loading... </div>
				) : (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div>
							<label>이메일</label>
							<input type="text" name="email" ref={register} />
							<p>{ValidationErrors.email?.message}</p>
						</div>
						<input type="submit" disabled={!formState.isValid} value="찾기" />
						<ErrorMessage data-testid="error-message">{error}</ErrorMessage>
					</form>
				)}
				<div>새 비밀번호를 설정할 수 있도록 이메일로 메시지가 전송됩니다.</div>
			</div>
		);
	}
};

export default FindPasswordForm;
