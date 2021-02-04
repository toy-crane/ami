import React from "react";
import { useHistory } from "react-router-dom";
import {
	Button as ThemeUIButton,
	ButtonProps as ThemeUIButtonProps,
} from "theme-ui";
import Icon from "../Icon";
import { IconProps } from "../Icon/index";

export interface ButtonProps extends ThemeUIButtonProps {}
export interface LinkButtonProps extends ButtonProps {
	route: string;
}
export interface IconButtonProps extends ButtonProps, IconProps {}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => (
	<ThemeUIButton {...props}>{props.children}</ThemeUIButton>
);

const LinkButton = (props: LinkButtonProps) => {
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

const IconButton = (props: IconButtonProps) => {
	return (
		<Button
			sx={{
				appearance: "none",
				bg: "transparent",
				border: 0,
				p: 1,
				m: 0,
				":focus": {
					outline: "2px solid",
				},
				":hover": {
					bg: "transparent",
				},
			}}
			{...props}
		>
			<Icon {...props} icon={props.icon}></Icon>
		</Button>
	);
};

export { Button, LinkButton, IconButton };
