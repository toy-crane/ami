import { Box } from "@theme-ui/components";
import { NavigationBar } from "components";
import React from "react";
export default {
	title: "Molecules/NavigationBar",
	component: NavigationBar,
};

export const NavigationBarwithLoggedOut = () => (
	<Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
		<NavigationBar></NavigationBar>
	</Box>
);

export const NavigationBarwithLoggedIn = () => (
	<Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
		<NavigationBar isLoggedIn={true}></NavigationBar>
	</Box>
);
