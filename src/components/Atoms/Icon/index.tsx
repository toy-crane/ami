/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { ICONS } from "./constants";
export interface IconProps {
	icon: ICONS;
	size?: number;
	color?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
	return (
		<Flex sx={{ alignItems: "center" }} {...props}>
			<svg
				width={props.size ? props.size : 24}
				height={props.size ? props.size : 24}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				sx={{
					display: "block",
					margin: 0,
				}}
			>
				<path
					d={props.icon}
					fill={props.color ? props.color : "currentColor"}
				/>
			</svg>
		</Flex>
	);
};

export default Icon;
