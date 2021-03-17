import React from "react";
import { Input as ThemeUIInput, SxStyleProp } from "theme-ui";

interface InputProps {
	placeholder?: string;
	invalid?: boolean;
	sx?: SxStyleProp;
}

const Input = ({ invalid, ...props }: InputProps) => (
	<ThemeUIInput {...props} variant={invalid ? "invalidInput" : "input"} />
);
export default Input;
