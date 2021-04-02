/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Heading } from "theme-ui";
import RefundAccountTemplate from "./templates";
import { RefundAccountForm } from "components";

const RegisterRefundAccount = () => {
	return (
		<RefundAccountTemplate
			title={<Heading variant="pageTitle">환급 계좌 등록하기</Heading>}
			content={<RefundAccountForm />}
		></RefundAccountTemplate>
	);
};

export default RegisterRefundAccount;
