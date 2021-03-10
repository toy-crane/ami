/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { IconNames, IconSet } from "./constants";
import { Link } from "components";
export interface IconProps {
	icon: IconNames;
	size?: number;
	color?: string;
	href?: string;
	mr?: number;
	ml?: number;
}

const Icon: React.FC<IconProps> = ({
	size,
	icon,
	color,
	href,
	mr,
	ml,
}: IconProps) => {
	const StyledIcon = (
		<span
			sx={{
				display: "inline-flex",
				lineHeight: 0,
				color: color,
				mr,
				ml,
			}}
		>
			<svg
				width={size ? size : 20}
				height={size ? size : 20}
				viewBox={IconSet[icon].viewBox}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={IconSet[icon].path} fill="currentColor" />
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
