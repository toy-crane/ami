import { Box, Grid } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, FormInput, Spinner } from "components";
import { mobileValidator, nameValidator } from "components/validator";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivateUserMutation } from "types/graphql-types";
import { useHistory } from "react-router";

interface ActivationFormContainerProps {
	sx?: SxStyleProp;
}

interface ActivationFormProps extends ActivationFormContainerProps {
	sx?: SxStyleProp;
	onSubmit: (props: any) => void;
}

interface ActivationFormValues {
	name: string;
	mobile: string;
}

const activationFormSchema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

const ActivationFormContainer = () => {
	const [activateUser, { loading, data }] = useActivateUserMutation();
	let history = useHistory();

	const onSubmit = async ({
		mobile: originMobile,
		name,
	}: ActivationFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		await activateUser({ variables: { name: name, mobile: mobile } });
	};

	useEffect(() => {
		if (data) {
			history.goBack();
		}
	}, [data, history]);

	return loading || data ? (
		<Spinner loading={loading} />
	) : (
		<ActivationForm onSubmit={onSubmit}></ActivationForm>
	);
};

const ActivationForm = ({ sx, onSubmit }: ActivationFormProps) => {
	const { register, errors, handleSubmit } = useForm<ActivationFormValues>({
		resolver: yupResolver(activationFormSchema),
		mode: "onBlur",
	});

	return (
		<Box sx={sx}>
			<Grid sx={{ gap: 4 }}>
				<Grid sx={{ gap: 3 }}>
					<FormInput
						name="name"
						label="이름"
						register={register}
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
					></FormInput>
				</Grid>
				<Button
					variant="primary"
					href="/"
					width="100%"
					onClick={handleSubmit(onSubmit)}
				>
					계정 생성하기
				</Button>
			</Grid>
		</Box>
	);
};

export default ActivationFormContainer;
export { ActivationForm };
