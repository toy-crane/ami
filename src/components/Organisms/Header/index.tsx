import React from "react";
import Logo from "../../Atoms/Logo";
import { Flex } from "theme-ui";
import { IconButton } from "../../Atoms/Button";
import { ICONS } from "../../Atoms/Icon/constants";
import { Button } from "components";

const Header = () => (
	<Flex sx={{ py: 3, width: "100%", alignItems: "center" }}>
		<Logo
			href="/"
			sx={{
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
		<Button
			href="/login"
			ml={["none", "auto"]}
			sx={{
				display: ["none", "block"],
			}}
			variant="primary"
		>
			로그인
		</Button>
		<Button
			ml={["none", 2]}
			sx={{
				display: ["none", "block"],
			}}
			href="/sign-up"
			variant="secondary"
		>
			회원가입
		</Button>
	</Flex>
);

export default Header;
