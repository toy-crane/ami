import React from "react";
import { Button as ThemeUIButton, ButtonProps } from "theme-ui";

interface MyButtonProps extends ButtonProps {}

const Button: React.FC<MyButtonProps> = (props: MyButtonProps) => (
	<ThemeUIButton {...props}>{props.children}</ThemeUIButton>
);

export default Button;
