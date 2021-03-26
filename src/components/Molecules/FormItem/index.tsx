import { Flex, Text } from "@theme-ui/components";
import { Label } from "components";
import { SxStyleProp } from "theme-ui";
import React from "react";

export interface FormItemProps {
	label: string;
	invalid?: boolean;
	// input 값이 잘못 되었을 때 노출
	caption?: string;
	sx: SxStyleProp;
	required?: boolean;
	children: React.ReactNode;
}

const FormItem = ({
	label,
	invalid,
	caption,
	sx,
	required,
	children,
}: FormItemProps) => {
	return (
		<Flex sx={{ flexDirection: "column", width: "100%", ...sx }}>
			<Label sx={{ mb: "0.2rem" }}>{label}</Label>
			{children}
			{invalid && <Text variant="caption">{caption}</Text>}
		</Flex>
	);
};

export default FormItem;
