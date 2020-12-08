/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Container from "../Layout/Container";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer
			sx={{
				width: "100%",
				py: 3,
			}}
		>
			<Container>
				<div
					sx={{
						mx: "auto",
						display: "flex",
						alignItems: "center",
					}}
				></div>
			</Container>
		</footer>
	);
};

export default Footer;
