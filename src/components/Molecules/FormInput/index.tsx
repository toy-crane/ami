import { Flex, Text } from "@theme-ui/components";
import { Label, Input } from "components";
import { SxStyleProp } from "theme-ui";
import React from "react";

type RefReturn =
	| React.RefObject<HTMLInputElement>
	| ((instance: HTMLInputElement | null) => void)
	| null
	| undefined;
export interface FormInputProps {
	label: string;
	placeholder?: string;
	invalid?: boolean;
	// input 값이 잘못 되었을 때 노출
	caption?: string;
	sx: SxStyleProp;
	name: string;
	required?: boolean;
	register?: ({ required }: { required?: boolean }) => RefReturn;
}

const FormInput = ({
	label,
	placeholder,
	invalid,
	caption,
	sx,
	required,
	name,
	register,
}: FormInputProps) => {
	return (
		<Flex sx={{ flexDirection: "column", width: "100%", ...sx }}>
			<Label sx={{ mb: "0.2rem" }}>{label}</Label>
			<Input
				name={name}
				placeholder={placeholder}
				sx={{ mb: "0.2rem" }}
				invalid={invalid}
				ref={register && register({ required })}
			/>
			<Text variant="caption">{caption}</Text>
		</Flex>
	);
};

export default FormInput;
