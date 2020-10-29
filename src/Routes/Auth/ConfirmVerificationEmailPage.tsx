import React, { useEffect } from "react";
import { useConfirmVerificationTokenMutation } from "../../generated/graphql";
import { StringParam, useQueryParam } from "use-query-params";
import { useToken } from "../../services/tokenService";

const ConfirmVerificationEmailPage = () => {
	const tempEmail = localStorage.getItem("tempEmail");
	const { setToken } = useToken();
	const [verificationToken] = useQueryParam("verificationToken", StringParam);
	const [
		confirmVerification,
		{ loading, data },
	] = useConfirmVerificationTokenMutation({
		errorPolicy: "all",
	});
	const handleClick = () => {
		if (tempEmail && verificationToken) {
			confirmVerification({
				variables: { email: tempEmail, verificationToken },
			});
		}
	};
	useEffect(() => {
		if (data && data.confirmVerificationToken.token) {
			setToken(data.confirmVerificationToken.token);
			localStorage.removeItem("tempEmail");
		}
	});

	return (
		<div>
			{tempEmail ? (
				<div>
					이메일 인증
					<button onClick={handleClick}>이메일 인증 완료</button>
					{loading ? <div>전송중...</div> : null}
				</div>
			) : (
				<div>잘못된 접근입니다.</div>
			)}
		</div>
	);
};

export default ConfirmVerificationEmailPage;
