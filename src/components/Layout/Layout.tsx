/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Container from "./Container";

export default ({ children }: { children: React.ReactNode }) => (
	<div
		sx={{
			display: "flex",
			flexDirection: "column",
			minHeight: "100vh",
		}}
	>
		<Header />
		<main
			sx={{
				width: "100%",
				flex: "1 1 auto",
			}}
		>
			<Container>{children}</Container>
		</main>
		<Footer />
	</div>
);
