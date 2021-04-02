import { Box, Grid } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, Spinner, FormItem, Select, Input } from "components";
import { mobileValidator, nameValidator } from "components/validator";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivateUserMutation } from "types/graphql-types";
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
	name: string;
	mobile: string;
}

const refundAccountFormSchema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

const RefundAccountFormContainer = () => {
	const [activateUser, { loading }] = useActivateUserMutation();

	const onSubmit = async ({
		mobile: originMobile,
		name,
	}: RefundAccountFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		await activateUser({ variables: { name: name, mobile: mobile } });
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
						<FormItem label="환급 계좌 은행">
							<Select defaultValue="hello" options={BANK_LIST}></Select>
						</FormItem>
						<FormItem label="환급 계좌 번호">
							<Input name="accountNo"></Input>
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
