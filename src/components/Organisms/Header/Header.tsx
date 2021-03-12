/** @jsxRuntime classic */
/** @jsx jsx */
import Logo from "../../Atoms/Logo";
import { Flex, jsx } from "theme-ui";
import { ICONS } from "../../Atoms/Icon/constants";
import { Button, Dropdown } from "components";
import Avatar from "components/Atoms/Avatar";
import React from "react";

type HeaderProps = {
	isLoggedIn: boolean;
	avatar?: string | undefined | null;
	loading: boolean;
};

const Header = ({ isLoggedIn, avatar, loading }: HeaderProps) => (
	<Flex
		sx={{
			py: 3,
			width: "100%",
			alignItems: "center",
			justifyContent: "space-between",
		}}
	>
		<Logo href="/" />
		<ul
			sx={{
				display: ["flex", "none"],
				listStyle: "none",
				padding: 0,
				margin: 0,
			}}
		>
			<Dropdown>
				<Button icon={ICONS.menu} iconSize={24} variant="icon"></Button>
			</Dropdown>
		</ul>
		<ul
			sx={{
				display: ["none", "flex"],
				listStyle: "none",
				"& > li:not(:last-child)": {
					marginRight: 2,
				},
			}}
		>
			{loading ? null : isLoggedIn ? (
				<li>
					<Dropdown>
						<Avatar src={avatar || ""}></Avatar>
					</Dropdown>
				</li>
			) : (
				<React.Fragment>
					<li>
						<Button href="/login" variant="primary">
							로그인
						</Button>
					</li>
					<li>
						<Button href="/sign-up" variant="secondary">
							회원가입
						</Button>
					</li>
				</React.Fragment>
			)}
		</ul>
	</Flex>
);

export default Header;
