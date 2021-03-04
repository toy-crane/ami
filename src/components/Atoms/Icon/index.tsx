/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS } from "./constants";
export interface IconProps {
	icon: ICONS;
	size?: number;
	color?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
	return (
		<svg
			width={props.size ? props.size : 24}
			height={props.size ? props.size : 24}
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			sx={{
				display: "inline",
				margin: 0,
			}}
		>
			<path d={props.icon} fill="currentColor" />
		</svg>
	);
};

export default Icon;
