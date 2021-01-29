import React from "react";
import { Grid as ThemeUIGrid } from "theme-ui";

const Grid: React.FC = (props) => {
	return (
		<ThemeUIGrid variant="mobileLayout" {...props}>
			{props.children}
		</ThemeUIGrid>
	);
};

export default Grid;
