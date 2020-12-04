/** @jsxRuntime classic */
/** @jsx jsx */
import { Avatar, jsx, Link, Button } from "theme-ui";
import Container from "../Layout/Container";
import { Logo } from "../Logo";
import React from "react";
import { Divider } from "theme-ui";

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
				py: 3,
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
					<Link href="/">
						<Logo />
					</Link>
					{/* 여백 채우는 div */}
					<div sx={{ mx: "auto" }} />
					{isLoggedIn ? (
						<React.Fragment>
							{avatar ? (
								<Link href="/mypage">
									<Avatar
										src={avatar}
										sx={{ variant: "images.avatar" }}
										mr={2}
									/>
								</Link>
							) : null}
							<Button mr={2} onClick={handleLogout}>
								로그아웃
							</Button>
						</React.Fragment>
					) : (
						<div>
							<Link href="/login">
								<Button mr={2} variant="secondary">
									로그인
								</Button>
							</Link>
							<Link href="/sign-up">
								<Button mr={2}>회원가입</Button>
							</Link>
						</div>
					)}
				</div>
			</Container>
			<Divider sx={{ color: "gray" }} />
		</header>
	);
};

export default Header;
