import React from "react";
import { Box, BoxProps as ThemeUIBoxProps } from "theme-ui";

export interface BoxProps extends ThemeUIBoxProps {}
const SubTitle: React.FC<BoxProps> = (props: BoxProps) => {
	return (
		<Box
			pl={1}
			sx={{
				borderLeft: "8px solid",
				borderColor: "secondary100",
				fontSize: 4,
				fontWeight: "bold",
			}}
			{...props}
		>
			{props.children}
		</Box>
	);
};

export default SubTitle;
