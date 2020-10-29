import React from "react";
import { useResendVerificationTokenMutation } from "../../generated/graphql";

const CheckVerificationEmailPage = () => {
	const tempEmail = localStorage.getItem("tempEmail");
	const [
		resendVerificationToken,
		{ loading, data },
	] = useResendVerificationTokenMutation({
		errorPolicy: "all",
	});
	const handleClick = () => {
		if (tempEmail) {
			resendVerificationToken({ variables: { email: tempEmail } });
		}
	};
	return (
		<div>
			{tempEmail ? (
				<div>
					이메일을 확인하여 회원 가입을 완료해 주세요.
					<button onClick={handleClick}>이메일 재전송하기</button>
					{loading ? (
						<div>전송중...</div>
					) : data ? (
						<div>전송 완료되었습니다</div>
					) : (
						<div></div>
					)}
				</div>
			) : (
				<div>잘못된 접근입니다. </div>
			)}
		</div>
	);
};

export default CheckVerificationEmailPage;
