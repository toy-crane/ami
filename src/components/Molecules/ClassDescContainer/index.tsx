import { Divider } from "components";
import React from "react";
import { Grid, Heading, BoxProps } from "theme-ui";

interface ClassDescContainerProps extends BoxProps {
	title: string;
	children: React.ReactNode;
	hasDivider?: boolean;
}

const ClassDescContainer = ({
	title,
	children,
	hasDivider,
}: ClassDescContainerProps) => (
	<Grid sx={{ gap: 1 }}>
		<Heading variant="styles.h5">{title}</Heading>
		{children}
		{hasDivider && <Divider />}
	</Grid>
);

ClassDescContainer.defaultProps = {
	hasDivider: false,
};

export default ClassDescContainer;
