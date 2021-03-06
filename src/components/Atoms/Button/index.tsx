/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { useHistory } from "react-router-dom";
import {
	jsx,
	Button as ThemeUIButton,
	ButtonProps as ThemeUIButtonProps,
} from "theme-ui";
import Icon from "../Icon";
import { ICONS } from "../Icon/constants";
export interface ButtonProps extends ThemeUIButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	href?: string;
	icon?: ICONS;
	iconSize?: number;
}

const Button: React.FC<ButtonProps> = ({
	icon,
	iconSize,
	href,
	...props
}: ButtonProps) => {
	let history = useHistory();
	return (
		<ThemeUIButton
			onClick={href ? () => history.push(href) : props.onClick}
			sx={{
				display: "inline-flex",
				alignItems: "center",
			}}
			{...props}
		>
			{icon ? (
				<React.Fragment>
					<Icon
						icon={icon}
						size={iconSize}
						sx={props.children ? { mr: 2 } : {}}
					></Icon>
					{props.children}
				</React.Fragment>
			) : (
				props.children
			)}
		</ThemeUIButton>
	);
};

export default Button;
