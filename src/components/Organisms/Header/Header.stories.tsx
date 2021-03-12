import React from "react";
import Header from "./Header";
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
