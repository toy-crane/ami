import React from "react";
import Grid from "../../Layout/Grid";
import Logo from "../../Atoms/Logo";
import Icon from "../../Atoms/Icon";
import { Flex } from "theme-ui";
import { ButtonLink } from "../../Atoms/Button";

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
			<Icon
				sx={{
					display: ["block", "none"],
				}}
				icon="menu"
			/>
			<ButtonLink
				route="/login"
				ml={["none", "auto"]}
				sx={{
					display: ["none", "block"],
				}}
			>
				로그인
			</ButtonLink>
			<ButtonLink
				ml={["none", 2]}
				sx={{
					display: ["none", "block"],
				}}
				route="/sign-up"
			>
				회원가입
			</ButtonLink>
		</Flex>
	</Grid>
);

export default Header;
