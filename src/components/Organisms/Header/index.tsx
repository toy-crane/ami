import React from "react";
import Grid from "../../Layout/Grid";
import Logo from "../../Atoms/Logo";
import Icon from "../../Atoms/Icon";

const Header = () => (
	<Grid sx={{ py: 3 }}>
		<Logo
			sx={{
				gridColumnStart: 1,
				gridColumnEnd: 3,
				alignSelf: "center",
			}}
		/>
		<Icon
			sx={{ gridColumn: -2, justifySelf: "flex-end", alignSelf: "center" }}
			icon="menu"
		/>
	</Grid>
);

export default Header;
