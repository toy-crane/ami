/** @jsxRuntime classic */
/** @jsx jsx */
import { useReactiveVar } from "@apollo/client";
import { jsx } from "@theme-ui/core";
import { accountInfoCache } from "caches";
import HeaderMobile from "./HeaderMobile";

const HeaderContainer = () => {
	const { isLoggedIn, avatar, loading } = useReactiveVar(accountInfoCache);
	return (
		<HeaderMobile
			isLoggedIn={isLoggedIn}
			avatar={avatar}
			loading={loading}
		></HeaderMobile>
	);
};

export default HeaderContainer;
