import React from "react";
import { Label as ThemeUILabel, SxStyleProp } from "theme-ui";

interface LabelProps {
	children: React.ReactNode;
	sx?: SxStyleProp;
}

const Label = ({ children, ...props }: LabelProps) => (
	<ThemeUILabel {...props}>{children}</ThemeUILabel>
);
export default Label;
