import React from "react";
import { useLogout } from "../../../services/auth";
import Header from "./Header";

const HeaderContainer = () => {
	const handleLogout = useLogout();
	return (
		<Header handleLogout={handleLogout} isLoggedIn={false} avatar={null} />
	);
};

export default HeaderContainer;
