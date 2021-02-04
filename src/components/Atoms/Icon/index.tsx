/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { IconName, ICONS } from "./constants";
interface IconProps {
	icon: IconName;
	width?: number;
	height?: number;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
	return (
		<Flex sx={{ alignItems: "center" }} {...props}>
			<svg
				width={props.width}
				height={props.height ? props.height : 24}
				viewBox="0 0 20 14"
				xmlns="http://www.w3.org/2000/svg"
				sx={{
					display: "block",
					margin: 0,
				}}
			>
				<path d={ICONS[props.icon]} fill="#1A1A1A" />
			</svg>
		</Flex>
	);
};

export default Icon;
