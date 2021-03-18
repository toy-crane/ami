import React, { forwardRef } from "react";
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

export type InputProps = BoxPropsWithRef<
	"input",
	ThemeUIInputProps & {
		invalid?: boolean;
		sx?: SxStyleProp;
		name: string;
	}
>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ invalid, ...props }: InputProps, ref) => (
		<ThemeUIInput
			ref={ref}
			{...props}
			variant={invalid ? "invalidInput" : "input"}
		/>
	)
);
export default Input;
