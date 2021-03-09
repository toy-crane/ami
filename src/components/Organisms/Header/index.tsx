import React from "react";
import Logo from "../../Atoms/Logo";
import { Flex } from "theme-ui";
import { ICONS } from "../../Atoms/Icon/constants";
import { Button } from "components";

const Header = () => (
	<Flex sx={{ py: 3, width: "100%", alignItems: "center" }}>
		<Logo href="/" />
		<Button
			icon={ICONS.menu}
			iconSize={24}
			variant="icon"
			sx={{
				display: ["inline-flex", "none"],
				ml: ["auto", "none"],
			}}
		></Button>
		<Button
			href="/login"
			sx={{
				display: ["none", "block"],
				ml: ["none", "auto"],
			}}
			variant="primary"
		>
			로그인
		</Button>
		<Button
			sx={{
				display: ["none", "block"],
				ml: ["none", 1],
			}}
			href="/sign-up"
			variant="secondary"
		>
			회원가입
		</Button>
	</Flex>
);

export default Header;
