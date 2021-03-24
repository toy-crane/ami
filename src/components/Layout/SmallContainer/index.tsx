import { BoxProps, Box, SxStyleProp } from "theme-ui";
import React from "react";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	sx?: SxStyleProp;
}

const SmallContainer: React.FC<ContainerProps> = ({
	sx,
	...props
}: ContainerProps) => {
	return (
		<Box bg={props.baseColor} sx={sx}>
			<Box
				sx={{
					px: 3,
					mx: "auto",
					maxWidth: "smallContainer",
				}}
				{...props}
			>
				{props.children}
			</Box>
		</Box>
	);
};

export default SmallContainer;
