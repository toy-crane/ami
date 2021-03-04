/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS } from "./constants";
export interface IconProps {
	icon: ICONS;
	size?: number;
	color?: string;
	hasText?: boolean;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
	return (
		<span
			sx={
				props.hasText
					? { display: "inline-flex", lineHeight: 0, marginRight: 1 }
					: { display: "inline-flex", lineHeight: 0 }
			}
		>
			<svg
				width={props.size ? props.size : 20}
				height={props.size ? props.size : 20}
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d={props.icon} fill="currentColor" />
			</svg>
		</span>
	);
};

export default Icon;
