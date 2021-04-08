import { Radio, Label, RadioProps } from "theme-ui";
import React from "react";

interface RadioButtonProps extends RadioProps {
	name: string;
	label: string;
}

const RadioButton = ({ name, label }: RadioButtonProps) => {
	return (
		<Label>
			<Radio name={name} />
			{label}
		</Label>
	);
};
export default RadioButton;
