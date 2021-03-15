import React from "react";
import { Header } from "./";
export default {
	title: "Organisms/Header",
	component: Header,
};

export const HeaderWithWideScreen = () => (
	<Header isLoggedIn={false} avatar={undefined} loading={false}></Header>
);
export const HeaderWithLoggedIn = () => (
	<Header isLoggedIn={true} avatar={undefined} loading={false}></Header>
);
