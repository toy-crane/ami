/** @jsxRuntime classic */
/** @jsx jsx */
import { Avatar, jsx, Link, Button } from "theme-ui";
import Container from "../Container";
import React from "react";
import { Divider } from "theme-ui";
import Dropdown from "../../Button/Dropdown";
import Logo from "../../Atoms/Logo";

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
						<Logo></Logo>
					</Link>
					{/* 여백 채우는 div */}
					<div sx={{ mx: "auto" }} />
					{isLoggedIn ? (
						<React.Fragment>
							{avatar ? (
								<Dropdown>
									<Avatar
										src={avatar}
										sx={{ variant: "images.avatar" }}
										mr={2}
									/>
								</Dropdown>
							) : null}
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
