import React from "react";
import { IconName, ICONS } from "./constants";

interface IconProps {
	icon: IconName;
	width?: number;
	height?: number;
}

const Icon: React.FC<IconProps> = ({
	icon,
	width = 24,
	height = 24,
}: IconProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 20 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d={ICONS[icon]}
			fill="#1A1A1A"
		/>
	</svg>
);

export default Icon;
