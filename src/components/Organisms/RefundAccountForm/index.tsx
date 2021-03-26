import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, FormInput, Spinner } from "components";
import { mobileValidator, nameValidator } from "components/validator";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivateUserMutation } from "types/graphql-types";

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
				<React.Fragment>
					<FormInput
						name="name"
						label="이름"
						register={register}
						sx={{ marginBottom: 1 }}
						invalid={!!errors.name}
						caption={errors.name?.message}
						required
					></FormInput>
					<FormInput
						name="mobile"
						label="휴대폰 번호"
						register={register}
						invalid={!!errors.mobile}
						caption={errors.mobile?.message}
						required
						sx={{ marginBottom: 4 }}
					></FormInput>
					<Button
						variant="primary"
						href="/"
						width="100%"
						onClick={handleSubmit(onSubmit)}
					>
						계정 생성하기
					</Button>
				</React.Fragment>
			)}
		</Box>
	);
};

export default RefundAccountFormContainer;
export { RefundAccountForm };
