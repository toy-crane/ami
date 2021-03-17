import { Flex, Text } from "@theme-ui/components";
import { Label, Input } from "components";
import React from "react";

export interface InputFormProps {
	label: string;
	placeholder: string;
	invalid?: boolean;
	// input 값이 잘못 되었을 때 노출
	captionContent?: string;
}

const InputForm = ({
	label,
	placeholder,
	invalid,
	captionContent,
}: InputFormProps) => {
	return (
		<Flex sx={{ flexDirection: "column" }}>
			<Label sx={{ mb: "0.2rem" }}>{label}</Label>
			<Input
				placeholder={placeholder}
				sx={{ mb: "0.2rem" }}
				invalid={invalid}
			/>
			<Text variant="caption">{captionContent}</Text>
		</Flex>
	);
};

export default InputForm;
