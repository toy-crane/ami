/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS } from "./constants";
import { SxProps } from "theme-ui";
export interface IconProps extends SxProps {
	icon: ICONS;
	size?: number;
	color?: string;
}

const Icon: React.FC<IconProps> = ({ size, icon, ...props }: IconProps) => {
	return (
		<span
			sx={{
				display: "inline-flex",
				lineHeight: 0,
			}}
			{...props}
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
