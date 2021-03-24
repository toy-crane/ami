/** @jsxRuntime classic */
/** @jsx jsx */
import Logo from "../../Atoms/Logo";
import { Box, jsx } from "theme-ui";
import { NavigationBar } from "components";
import { useReactiveVar } from "@apollo/client";
import { accountInfoCache } from "caches";

interface HeaderContainerProps {
	// navigation 여부
	navless?: boolean;
}

interface HeaderProps extends HeaderContainerProps {
	isLoggedIn: boolean;
	loading: boolean;
	avatar: string | null | undefined;
}

const HeaderContainer = ({ navless }: HeaderContainerProps) => {
	const { isLoggedIn, avatar, loading } = useReactiveVar(accountInfoCache);
	return (
		<Header
			isLoggedIn={isLoggedIn}
			avatar={avatar}
			loading={loading}
			navless={navless}
		></Header>
	);
};

export const Header = ({
	isLoggedIn,
	avatar,
	loading,
	navless,
}: HeaderProps) => {
	return (
		<Box
			sx={{
				marginY: 3,
				display: "flex",
				width: "100%",
				justifyContent: "space-between",
				alignItems: "center",
				position: "relative",
				// 버튼이 없을 때도 최소 사이즈 유지하기 위해 추가
				height: "48px",
			}}
		>
			<Logo href="/" />
			{!loading && !navless && (
				<NavigationBar isLoggedIn={isLoggedIn} avatar={avatar}></NavigationBar>
			)}
		</Box>
	);
};

export default HeaderContainer;
