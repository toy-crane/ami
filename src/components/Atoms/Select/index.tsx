import { Select as ThemeUISelect } from "theme-ui";
import React from "react";

interface SelectProps {
	defaultValue: string;
	options: string[];
}

const Select = ({ defaultValue, options }: SelectProps) => {
	return (
		<ThemeUISelect defaultValue={defaultValue}>
			{options.map((option) => (
				<option>{option}</option>
			))}
		</ThemeUISelect>
	);
};

export default Select;
