/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import React from "react";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
	width?: string;
	zindex?: number;
	left?: number;
	bottom?: number;
	top?: number;
	right?: number;
	borderBottom?: string;
	borderTop?: string;
}
const Container: React.FC<ContainerProps> = ({
	position,
	width,
	zindex,
	borderBottom,
	borderTop,
	left,
	top,
	bottom,
	right,
	sx,
	...props
}: ContainerProps) => (
	<Box
		bg={props.baseColor}
		sx={{
			position: position || "static",
			width: width,
			zIndex: zindex,
			left: left,
			top: top,
			bottom: bottom,
			right: right,
			borderBottom: borderBottom,
			borderTop: borderTop,
			borderColor: "gray05",
		}}
	>
		<Box
			sx={{
				px: 3,
				mx: [0, "auto"],
				maxWidth: "container",
				...sx,
			}}
			{...props}
		>
			{props.children}
		</Box>
	</Box>
);

export default Container;
