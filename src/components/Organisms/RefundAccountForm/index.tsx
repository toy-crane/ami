import { Box, Grid } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, Spinner, FormItem, Select, Input } from "components";
import { bankNameValidator, bankAccountValidator } from "components/validator";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterRefundAccountMutation } from "types/graphql-types";
import { BANK_LIST } from "commons/constants/bank";

interface RefundAccountFormContainerProps {
	sx?: SxStyleProp;
}

interface RefundAccountFormProps extends RefundAccountFormContainerProps {
	sx?: SxStyleProp;
	loading?: boolean;
	onSubmit: (props: any) => void;
}

interface RefundAccountFormValues {
	bankName: string;
	bankAccount: string;
}

const refundAccountFormSchema = yup.object().shape({
	bankName: bankNameValidator,
	bankAccount: bankAccountValidator,
});

const RefundAccountFormContainer = () => {
	const [
		registerRefundAccount,
		{ loading },
	] = useRegisterRefundAccountMutation();

	const onSubmit = async ({
		bankName,
		bankAccount,
	}: RefundAccountFormValues) => {
		const bankCode = bankName;
		await registerRefundAccount({
			variables: { bankAccount, bankCode },
		});
	};

	return <RefundAccountForm onSubmit={onSubmit} loading={loading} />;
};

const RefundAccountForm = ({
	sx,
	onSubmit,
	loading,
}: RefundAccountFormProps) => {
	const { register, errors, handleSubmit } = useForm<RefundAccountFormValues>({
		resolver: yupResolver(refundAccountFormSchema),
		mode: "onBlur",
	});

	return (
		<Box sx={sx}>
			{loading ? (
				<Spinner loading={loading} />
			) : (
				<Grid sx={{ gap: 4 }}>
					<Grid sx={{ gap: 3 }}>
						<FormItem
							label="환급 계좌 은행"
							invalid={!!errors.bankName}
							caption={errors.bankName?.message}
						>
							<Select
								name="bankName"
								defaultValue="카카오뱅크"
								options={BANK_LIST}
								ref={register}
							></Select>
						</FormItem>
						<FormItem
							label="환급 계좌 번호"
							invalid={!!errors.bankAccount}
							caption={errors.bankAccount?.message}
						>
							<Input name="bankAccount" ref={register}></Input>
						</FormItem>
					</Grid>
					<Button
						variant="primary"
						href="/"
						width="100%"
						onClick={handleSubmit(onSubmit)}
					>
						예치금 환급 계좌 등록하기
					</Button>
				</Grid>
			)}
		</Box>
	);
};

export default RefundAccountFormContainer;
export { RefundAccountForm };
