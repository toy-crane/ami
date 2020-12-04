/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Container: React.FunctionComponent = (props) => (
	<div
		{...props}
		sx={{
			maxWidth: "container",
			mx: "auto",
			px: 3,
		}}
	/>
);

export default ({ children }: { children: React.ReactNode }) => (
	<div
		sx={{
			display: "flex",
			flexDirection: "column",
			minHeight: "100vh",
		}}
	>
		<header
			sx={{
				width: "100%",
			}}
		>
			<Container>Header</Container>
		</header>
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
			<Container>Footer</Container>
		</footer>
	</div>
);
