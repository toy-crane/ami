import { Flex, Text } from "@theme-ui/components";
import { Label, Input } from "components";
import { SxStyleProp } from "theme-ui";
import React from "react";

export interface FormInputProps {
	label: string;
	placeholder?: string;
	invalid?: boolean;
	// input 값이 잘못 되었을 때 노출
	captionContent?: string;
	sx: SxStyleProp;
	name: string;
}

const FormInput = ({
	label,
	placeholder,
	invalid,
	captionContent,
	name,
	sx,
}: FormInputProps) => {
	return (
		<Flex sx={{ flexDirection: "column", width: "100%", ...sx }}>
			<Label sx={{ mb: "0.2rem" }}>{label}</Label>
			<Input
				name={name}
				placeholder={placeholder}
				sx={{ mb: "0.2rem" }}
				invalid={invalid}
			/>
			<Text variant="caption">{captionContent}</Text>
		</Flex>
	);
};

export default FormInput;
