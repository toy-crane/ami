import React from "react";
import { Flex, Link } from "theme-ui";
import { IconName, ICONS } from "./constants";
interface IconProps {
	icon: IconName;
	width?: number;
	height?: number;
	hasLink?: boolean;
	href?: string;
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
	const IconComponent = (
		<Flex sx={{ alignItems: "center" }} {...props}>
			<svg
				width={props.width}
				height={props.height ? props.height : 24}
				viewBox="0 0 20 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d={ICONS[props.icon]}
					fill="#1A1A1A"
				/>
			</svg>
		</Flex>
	);
	return (
		<>
			{props.hasLink && props.href ? (
				<Link href={props.href}>{IconComponent}</Link>
			) : (
				IconComponent
			)}
		</>
	);
};

export default Icon;
