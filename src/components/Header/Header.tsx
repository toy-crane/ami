/** @jsxRuntime classic */
/** @jsx jsx */
import { Avatar, jsx, Link } from "theme-ui";
import Container from "../Layout/Container";
import { Logo } from "../Logo";

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
						<div>
							<Link
								onClick={handleLogout}
								sx={{
									variant: "styles.nav",
									ml: 3,
								}}
							>
								로그아웃
							</Link>
							{avatar ? <Avatar src={avatar} /> : null}
						</div>
					) : (
						<Link
							href="/login"
							sx={{
								variant: "styles.nav",
								ml: 3,
								py: 2,
							}}
						>
							로그인
						</Link>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
