import React from "react";
import { Grid as ThemeUIGrid } from "theme-ui";

const Grid: React.FC = ({ children }) => {
	return <ThemeUIGrid variant="mobileLayout">{children}</ThemeUIGrid>;
};

export default Grid;
