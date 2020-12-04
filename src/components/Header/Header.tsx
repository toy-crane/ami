/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import Container from "../Layout/Container";
import { Logo } from "../Logo";

type HeaderProps = {
	isLoggedIn: boolean;
	email: string | undefined;
	handleLogout(): void;
};

const Header = ({ isLoggedIn, email, handleLogout }: HeaderProps) => {
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
							{email}
							<Link
								onClick={handleLogout}
								sx={{
									variant: "styles.nav",
									ml: 3,
									py: 2,
								}}
							>
								로그아웃
							</Link>
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
