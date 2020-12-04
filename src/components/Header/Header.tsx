/** @jsxRuntime classic */
/** @jsx jsx */
import { Avatar, jsx, Link, Button } from "theme-ui";
import Container from "../Layout/Container";
import { Logo } from "../Logo";
import React from "react";

type HeaderProps = {
	isLoggedIn: boolean;
	avatar: string | null | undefined;
	handleLogout(): void;
};

const Header = ({ isLoggedIn, handleLogout, avatar }: HeaderProps) => {
	return (
		<header
			sx={{
				width: "100%",
				backgroundColor: "muted",
			}}
		>
			<Container>
				<div
					sx={{
						mx: "auto",
						display: "flex",
						alignItems: "center",
					}}
				>
					<Logo />
					{/* 여백 채우는 div */}
					<div sx={{ mx: "auto" }} />
					{isLoggedIn ? (
						<React.Fragment>
							{avatar ? (
								<Avatar src={avatar} sx={{ variant: "images.avatar" }} mr={2} />
							) : null}
							<Button mr={2} onClick={handleLogout}>
								로그아웃
							</Button>
						</React.Fragment>
					) : (
						<div>
							<Button mr={2}>로그인</Button>
							<Button mr={2}>회원가입</Button>
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
