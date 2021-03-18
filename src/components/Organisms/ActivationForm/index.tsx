import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button, FormInput } from "components";
import React from "react";

interface ActivationFormProps {
	sx?: SxStyleProp;
}

const ActivationForm = ({ sx, ...props }: ActivationFormProps) => {
	return (
		<Box sx={sx}>
			<FormInput name="name" label="이름" sx={{ marginBottom: 1 }}></FormInput>
			<FormInput
				name="mobile"
				label="휴대폰 번호"
				sx={{ marginBottom: 3 }}
			></FormInput>
			<Button variant="primary" href="/" width="100%">
				계정 생성하기
			</Button>
		</Box>
	);
};

export default ActivationForm;
