/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import HeaderContainer from "../Header/HeaderContainer";
import Container from "./Container";

export default ({ children }: { children: React.ReactNode }) => (
	<div
		sx={{
			display: "flex",
			flexDirection: "column",
			minHeight: "100vh",
		}}
	>
		<HeaderContainer />
		<main
			sx={{
				width: "100%",
				flex: "1 1 auto",
			}}
		>
			<Container>{children}</Container>
		</main>
		<footer
			sx={{
				width: "100%",
			}}
		>
			Footer
		</footer>
	</div>
);
