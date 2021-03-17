import React from "react";
import { Input as ThemeUIInput } from "theme-ui";

interface InputProps {
	placeholder?: string;
}

const Input = (props: InputProps) => <ThemeUIInput {...props} />;
export default Input;
