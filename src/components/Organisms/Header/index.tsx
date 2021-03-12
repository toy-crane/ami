/** @jsxRuntime classic */
/** @jsx jsx */
import { useReactiveVar } from "@apollo/client";
import { jsx } from "@theme-ui/core";
import { accountInfoCache } from "caches";
import Header from "./Header";

const HeaderContainer = () => {
	const { isLoggedIn, avatar, loading } = useReactiveVar(accountInfoCache);
	return (
		<Header isLoggedIn={isLoggedIn} avatar={avatar} loading={loading}></Header>
	);
};

export default HeaderContainer;
