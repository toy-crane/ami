import React from "react";
import {
	Input as ThemeUIInput,
	SxStyleProp,
	InputProps as ThemeUIInputProps,
	BoxOwnProps,
} from "theme-ui";

type BoxPropsWithRef<
	T extends React.ElementType,
	P extends BoxOwnProps = BoxOwnProps
> = React.ComponentPropsWithRef<T> & P;

interface CustomInputProps extends ThemeUIInputProps {
	invalid?: boolean;
	sx?: SxStyleProp;
	name: string;
}

export type InputProps = BoxPropsWithRef<"input", CustomInputProps>;

const Input = ({ invalid, ...props }: InputProps) => (
	<ThemeUIInput {...props} variant={invalid ? "invalidInput" : "input"} />
);
export default Input;
