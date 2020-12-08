/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Container from "./Container";

const MainLayout: React.FC = ({ children }) => (
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
				// header와 footer간의 빈공간을 채우도록 설정
				flex: "1 1 auto",
			}}
		>
			<Container>{children}</Container>
		</main>
		<Footer />
	</div>
);

export default MainLayout;
