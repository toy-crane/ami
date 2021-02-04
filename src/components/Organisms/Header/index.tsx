import React from "react";
import Grid from "../../Layout/Grid";
import Logo from "../../Atoms/Logo";
import Icon from "../../Atoms/Icon";
import { ButtonLink } from "../../Atoms/Button";

const Header = () => (
	<Grid sx={{ py: 3 }}>
		<Logo
			sx={{
				gridColumnStart: 1,
				gridColumnEnd: [3, 4],
				alignSelf: "center",
			}}
		/>
		<Icon
			sx={{
				gridColumnStart: -1,
				justifySelf: "flex-end",
				alignSelf: "center",
				display: ["block", "none"],
			}}
			icon="menu"
		/>
	</Grid>
);

export default Header;
