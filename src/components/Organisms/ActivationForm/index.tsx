import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, FormInput } from "components";
import { mobileValidator, nameValidator } from "components/validator";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface ActivationFormProps {
	sx?: SxStyleProp;
}

interface ActivationFormValues {
	name: string;
	mobile: string;
}

const activationFormSchema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

const ActivationForm = ({ sx }: ActivationFormProps) => {
	const { register, errors, handleSubmit } = useForm<ActivationFormValues>({
		resolver: yupResolver(activationFormSchema),
		mode: "onBlur",
	});

	const onSubmit = ({ mobile: originMobile, name }: ActivationFormValues) => {
		const mobile = originMobile.replaceAll("-", "");
		console.log(name, mobile);
	};

	return (
		<Box sx={sx}>
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
				sx={{ marginBottom: 3 }}
			></FormInput>
			<Button
				variant="primary"
				href="/"
				width="100%"
				onClick={handleSubmit(onSubmit)}
			>
				계정 생성하기
			</Button>
		</Box>
	);
};

export default ActivationForm;
