import React from "react";
import Grid from "../../Layout/Grid";
import Logo from "../../Atoms/Logo";
import { Flex } from "theme-ui";
import { IconButton, LinkButton } from "../../Atoms/Button";
import { ICONS } from "../../Atoms/Icon/constants";

const Header = () => (
	<Grid>
		<Flex sx={{ py: 3, gridColumn: "1/-1" }}>
			<Logo
				sx={{
					gridColumnStart: 1,
					gridColumnEnd: [3, 4],
					alignSelf: "center",
				}}
			/>
			<IconButton
				icon={ICONS.menu}
				sx={{
					display: ["block", "none"],
					ml: ["auto", "none"],
				}}
			></IconButton>
			<LinkButton
				route="/login"
				ml={["none", "auto"]}
				sx={{
					display: ["none", "block"],
				}}
				variant="primary"
			>
				로그인
			</LinkButton>
			<LinkButton
				ml={["none", 2]}
				sx={{
					display: ["none", "block"],
				}}
				route="/sign-up"
				variant="secondary"
			>
				회원가입
			</LinkButton>
		</Flex>
	</Grid>
);

export default Header;
