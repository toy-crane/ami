import {
	Checkbox as ThemeUICheckBox,
	Label,
	CheckboxProps as ThemeUICheckBoxProps,
} from "theme-ui";
import React from "react";

interface CheckBoxProps extends ThemeUICheckBoxProps {
	name: string;
	label: string;
}

const Checkbox = ({ name, label, defaultChecked }: CheckBoxProps) => {
	return (
		<Label>
			<ThemeUICheckBox name={name} defaultChecked={defaultChecked} />
			{label}
		</Label>
	);
};
export default Checkbox;
