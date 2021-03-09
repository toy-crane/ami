/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS } from "./constants";
import { SxProps } from "theme-ui";
import { Link } from "components";
export interface IconProps extends SxProps {
	icon: ICONS;
	size?: number;
	color?: string;
	href?: string;
}

const Icon: React.FC<IconProps> = ({ size, icon, color, href }: IconProps) => {
	const StyledIcon = (
		<span
			sx={{
				display: "inline-flex",
				lineHeight: 0,
				color: color,
			}}
		>
			<svg
				width={size ? size : 20}
				height={size ? size : 20}
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={icon} fill="currentColor" />
			</svg>
		</span>
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
			{StyledIcon}
		</Link>
	) : (
		StyledIcon
	);
};

export default Icon;
