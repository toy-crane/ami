/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS } from "./constants";
export interface IconProps {
	icon: ICONS;
	size?: number;
	color?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Icon: React.FC<IconProps> = ({
	size,
	icon,
	onClick,
	...props
}: IconProps) => {
	return (
		<span
			onClick={onClick}
			sx={{
				display: "inline-flex",
				cursor: onClick ? "pointer" : "default",
				lineHeight: 0,
				...props,
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
};

export default Icon;
