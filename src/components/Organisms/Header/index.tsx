/** @jsxRuntime classic */
/** @jsx jsx */
import Logo from "../../Atoms/Logo";
import { Box, jsx } from "theme-ui";
import { NavigationBar } from "components";
import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";

interface HeaderProps {
	isLoggedIn: boolean;
	loading: boolean;
	avatar: string | null | undefined;
}

const HeaderContainer = () => {
	const { isLoggedIn, avatar, loading } = useReactiveVar(accountInfoCache);
	return (
		<Header isLoggedIn={isLoggedIn} avatar={avatar} loading={loading}></Header>
	);
};

export const Header = ({ isLoggedIn, avatar, loading }: HeaderProps) => {
	return (
		<Box
			sx={{
				height: "42px",
				marginY: 3,
				display: "flex",
				width: "100%",
				justifyContent: "space-between",
				alignItems: "center",
				position: "relative",
			}}
		>
			<Logo href="/" mt={2} />
			{!loading && (
				<NavigationBar isLoggedIn={isLoggedIn} avatar={avatar}></NavigationBar>
			)}
		</Box>
	);
};

export default HeaderContainer;
