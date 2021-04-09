import {
	Heading as ThemeUIHeading,
	HeadingProps as ThemeUIHeadingProps,
} from "theme-ui";
import React from "react";

interface HeadingProps extends ThemeUIHeadingProps {
	hasBorder?: boolean;
	variant: "sectionTitle" | "sectionSubTitle" | "pageTitle" | "subTitle";
}

const Heading = ({ children, hasBorder, variant, sx }: HeadingProps) => {
	return (
		<ThemeUIHeading
			variant={variant}
			sx={{
				borderBottom: hasBorder ? "1px solid" : "none",
				borderColor: hasBorder ? "gray05" : "inherit",
				...sx,
			}}
		>
			{children}
		</ThemeUIHeading>
	);
};
export default Heading;
