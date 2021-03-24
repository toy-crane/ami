/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, BoxProps } from "theme-ui";
import React from "react";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
	width?: string;
	zindex?: number;
}
const Container: React.FC<ContainerProps> = ({
	position,
	width,
	zindex,
	...props
}: ContainerProps) => (
	<Box
		bg={props.baseColor}
		sx={{ position: position || "static", width: width, zIndex: zindex }}
	>
		<Box
			sx={{
				px: 3,
				mx: [0, "auto"],
				maxWidth: "container",
			}}
			{...props}
		>
			{props.children}
		</Box>
	</Box>
);

export default Container;
