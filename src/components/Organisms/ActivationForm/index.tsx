import { Box } from "@theme-ui/components";
import { SxStyleProp } from "@theme-ui/core";
import { Button } from "components";
import FormInput from "components/Molecules/FormInput";
import React from "react";

interface ActivationFormProps {
	sx?: SxStyleProp;
}

const ActivationForm = ({ sx, ...props }: ActivationFormProps) => {
	return (
		<Box sx={sx}>
			<FormInput label="이름" sx={{ marginBottom: 1 }}></FormInput>
			<FormInput label="휴대폰 번호" sx={{ marginBottom: 3 }}></FormInput>
			<Button variant="primary" href="/" width="100%">
				계정 생성하기
			</Button>
		</Box>
	);
};

export default ActivationForm;
