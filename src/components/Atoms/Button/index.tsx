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
}

const Button: React.FC<ButtonProps> = ({
	icon,
	iconSize,
	href,
	onClick,
	children,
	variant,
}: ButtonProps) => {
	const StyledButton = (
		<ThemeUIButton
			variant={variant}
			sx={{
				minWidth: "10ch",
				display: "inline-flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			onClick={onClick}
		>
			<React.Fragment>
				{icon && (
					<Icon
						icon={icon}
						size={iconSize}
						sx={children ? { mr: 2 } : {}}
					></Icon>
				)}
				{children}
			</React.Fragment>
		</ThemeUIButton>
	);
	return href ? (
		<Link
			href={href}
			sx={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				cursor: "pointer",
			}}
		>
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
