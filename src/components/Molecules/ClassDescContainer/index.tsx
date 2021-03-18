import React from "react";
import { Box, Heading, BoxProps } from "theme-ui";

interface ClassDescContainerProps extends BoxProps {
	title: string;
	children: React.ReactNode;
}

const ClassDescContainer = ({ title, children }: ClassDescContainerProps) => (
	<Box>
		<Heading variant="styles.h3" mb={[2, 3]}>
			{title}
		</Heading>
		{children}
	</Box>
);

export default ClassDescContainer;
