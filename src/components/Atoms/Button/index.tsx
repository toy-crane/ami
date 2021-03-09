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
import Link from "../Link";
export interface ButtonProps extends ThemeUIButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	href?: string;
	icon?: ICONS;
	iconSize?: number;
	children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	icon,
	iconSize,
	href,
	onClick,
	children,
	...props
}: ButtonProps) => {
	const StyledButton = (
		<ThemeUIButton
			onClick={onClick}
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
						sx={children ? { mr: 2 } : {}}
					></Icon>
					{children}
				</React.Fragment>
			) : (
				children
			)}
		</ThemeUIButton>
	);
	return href ? (
		<Link href={href} sx={props.sx}>
			{StyledButton}
		</Link>
	) : (
		StyledButton
	);
};

export default Button;
