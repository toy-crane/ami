import { Radio, Label, RadioProps } from "theme-ui";
import React from "react";

interface RadioButtonProps extends RadioProps {
	name: string;
	label: string;
}

const RadioButton = ({ name, label, checked }: RadioButtonProps) => {
	return (
		<Label>
			<Radio name={name} checked />
			{label}
		</Label>
	);
};
export default RadioButton;
