/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import Logo from "../Logo/Logo";
import Container from "../Layout/Container";

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
						alignItems: "baseline",
					}}
				>
					<Link
						href="/"
						sx={{
							variant: "styles.nav",
							fontSize: 5,
							py: 2,
						}}
					>
						Code Pot
					</Link>
					{/* 여백 채우는 div */}
					<div sx={{ mx: "auto" }} />
					<Link
						href="/mypage"
						sx={{
							variant: "styles.nav",
							ml: 3,
							py: 2,
						}}
					>
						My page
					</Link>
				</div>
			</Container>
		</header>
	);
};

export default Header;
