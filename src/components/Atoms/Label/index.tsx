import React from "react";
import { Label as ThemeUILabel } from "theme-ui";

interface LabelProps {
	children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => (
	<ThemeUILabel>{children}</ThemeUILabel>
);
export default Label;
