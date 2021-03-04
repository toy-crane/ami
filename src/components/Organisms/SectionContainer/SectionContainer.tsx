import React from "react";
import { Box, Heading, BoxProps } from "theme-ui";

interface SectionContainerProps extends BoxProps {
	title: string;
}

const SectionContainer: React.FC<SectionContainerProps> = (
	props: SectionContainerProps
) => (
	<Box>
		<Heading variant="styles.h2" mb={[3, 4]}>
			{props.title}
		</Heading>
		{props.children}
	</Box>
);

export default SectionContainer;
