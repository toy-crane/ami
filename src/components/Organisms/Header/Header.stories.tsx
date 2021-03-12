import React from "react";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
export default {
	title: "Organisms/Header",
	component: Header,
};

export const LogoutStatusHeader = () => (
	<Header isLoggedIn={false} loading={false}></Header>
);
export const LoginStatusHeader = () => (
	<Header
		isLoggedIn={true}
		loading={false}
		avatar="https://avatars1.githubusercontent.com/u/3426196?v=4"
	></Header>
);

export const HeaderWithMobile = () => (
	<HeaderMobile
		isLoggedIn={true}
		loading={false}
		avatar="https://avatars1.githubusercontent.com/u/3426196?v=4"
	></HeaderMobile>
);
