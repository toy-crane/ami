/** @jsxRuntime classic */
/** @jsx jsx */
import Logo from "../../Atoms/Logo";
import { Box, jsx } from "theme-ui";
import { Dropdown, Icon, Link } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import { useState } from "react";
import Avatar from "components/Atoms/Avatar";

type HeaderProps = {
	isLoggedIn: boolean;
	avatar?: string | undefined | null;
	loading: boolean;
};

const HeaderMobile = ({ isLoggedIn, avatar, loading }: HeaderProps) => {
	const [menu, showMenu] = useState<boolean>(false);
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				height: "42px",
				display: ["block", "flex"],
				justifyContent: ["none", "space-between"],
			}}
		>
			<Logo href="/" mt={2} />
			<span
				onClick={() => showMenu((menu) => !menu)}
				sx={{
					display: ["block", "none"],
					position: "absolute",
					right: 0,
					top: 2,
					lineHeight: 0,
					cursor: "pointer",
				}}
			>
				<Icon icon={ICONS.menu} size={24}></Icon>
			</span>
			<ul sx={{ variant: "styles.ul", display: ["none", "block"] }}>
				<Dropdown>
					<Avatar src={avatar || ""}></Avatar>
				</Dropdown>
			</ul>
			{menu && (
				<ul
					sx={{
						variant: "styles.ul",
						bg: "background",
						"& > li": {
							textAlign: "center",
							margin: 3,
						},
					}}
				>
					<li>
						<Link href="/mypage">마이 페이지</Link>
					</li>
					<li>
						<Link onClick={() => alert("로그아웃 버튼 클릭")}>로그아웃</Link>
					</li>
				</ul>
			)}
		</Box>
	);
};

export default HeaderMobile;
