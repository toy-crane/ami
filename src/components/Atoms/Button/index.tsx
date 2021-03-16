/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
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
	variant?: string;
	width?: string;
}

const Button: React.FC<ButtonProps> = ({
	icon,
	iconSize,
	href,
	onClick,
	children,
	variant,
	width,
}: ButtonProps) => {
	const StyledButton = (
		<ThemeUIButton
			variant={variant}
			sx={{
				minWidth: children ? "10ch" : "none",
				minHeight: "48px",
				display: "inline-flex",
				justifyContent: "center",
				alignItems: "center",
				width: width,
			}}
			onClick={onClick}
		>
			<React.Fragment>
				{icon && (
					<Icon icon={icon} size={iconSize} mr={children ? 2 : 0}></Icon>
				)}
				{children}
			</React.Fragment>
		</ThemeUIButton>
	);
	return href ? (
		<Link href={href} width={width}>
			{StyledButton}
		</Link>
	) : (
		StyledButton
	);
};

Button.defaultProps = {
	variant: "primary",
};

export default Button;
