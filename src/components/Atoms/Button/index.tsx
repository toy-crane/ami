import React from "react";
import {
	Button as ThemeUIButton,
	ButtonProps as ThemeUIButtonProps,
} from "theme-ui";

export interface ButtonProps extends ThemeUIButtonProps {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
	<ThemeUIButton {...props}>{props.children}</ThemeUIButton>
);

export default Button;
