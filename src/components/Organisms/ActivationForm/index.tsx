import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, FormInput } from "components";
import React from "react";
import { useForm } from "react-hook-form";

interface ActivationFormProps {
	sx?: SxStyleProp;
}

interface ActivationFormValues {
	name: string;
	mobile: number;
}

const ActivationForm = ({ sx }: ActivationFormProps) => {
	const { register, handleSubmit } = useForm<ActivationFormValues>();

	const onSubmit = (data: ActivationFormValues) => {
		console.log(data);
	};

	return (
		<Box sx={sx}>
			<FormInput
				name="name"
				label="이름"
				register={register}
				sx={{ marginBottom: 1 }}
				required
			></FormInput>
			<FormInput
				name="mobile"
				label="휴대폰 번호"
				register={register}
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
