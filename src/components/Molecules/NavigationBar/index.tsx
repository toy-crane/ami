/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import { Button, Icon, Avatar, Link } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import React, { useState } from "react";

interface NavigationProps {
	avatar?: string | undefined | null;
	isLoggedIn: boolean;
}

const NavigationBar = ({ avatar, isLoggedIn }: NavigationProps) => {
	const [showNav, setShowNav] = useState<boolean>(false);
	return (
		<React.Fragment>
			<ul
				sx={{
					variant: "styles.ul",
					display: "flex",
					alignItems: "center",
					"& > li": {
						lineHeight: 0,
					},
					"& > li:not(:first-child)": {
						marginLeft: 2,
					},
				}}
			>
				<li
					onClick={() => setShowNav((showNav) => !showNav)}
					sx={{ display: ["block", "none"], cursor: "pointer" }}
				>
					<Icon icon={ICONS.menu} size={24}></Icon>
				</li>
				{isLoggedIn ? (
					<li
						sx={{ display: ["none", "block"], cursor: "pointer" }}
						onClick={() => setShowNav((showNav) => !showNav)}
					>
						<Avatar src={avatar!}></Avatar>
					</li>
				) : (
					<React.Fragment>
						<li sx={{ display: ["none", "block"] }}>
							<Button href="/login" variant="primary">
								로그인
							</Button>
						</li>
						<li sx={{ display: ["none", "block"] }}>
							<Button href="/sign-up" variant="secondary">
								회원가입
							</Button>
						</li>
					</React.Fragment>
				)}
			</ul>
			{showNav && (
				<Box
					sx={{
						position: "absolute",
						top: "58px",
						right: ["0px", "0px"],
						width: ["inherit", "200px"],
						bg: "white",
						zIndex: 10000,
					}}
				>
					<ul
						sx={{
							variant: "styles.ul",
							display: "flex",
							alignItems: ["strech", "flex-start"],
							flexDirection: "column",
							border: ["0px", "1px solid"],
							borderColor: ["gray05", "gray05"],
							paddingX: 2,
							"& > li": {
								textAlign: "center",
								paddingY: 2,
								borderBottom: ["1px solid", "0px"],
								borderColor: "gray05",
							},
							"& > li:first-child": {
								borderTop: ["1px solid", "0px"],
								borderColor: "gray05",
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
				</Box>
			)}
		</React.Fragment>
	);
};

NavigationBar.defaultProps = {
	isLoggedIn: false,
};

export default NavigationBar;
