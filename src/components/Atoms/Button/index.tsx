import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
	Button as ThemeUIButton,
	ButtonProps as ThemeUIButtonProps,
} from "theme-ui";

export interface ButtonProps extends ThemeUIButtonProps {}
export interface ButtonLinkProps extends ButtonProps {
	route: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
	<ThemeUIButton {...props}>{props.children}</ThemeUIButton>
);

const ButtonLink = (props: ButtonLinkProps) => {
	const history = useHistory();
	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		history.push(props.route);
	};
	return (
		<Button onClick={handleClick} {...props}>
			{props.children}
		</Button>
	);
};

export { Button, ButtonLink };
