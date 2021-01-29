/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Footer } from "./Footer";
import Container from "./Container";
import Header from "../Organisms/Header";

const MainLayout: React.FC = ({ children }) => (
	<Flex
		sx={{
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
	</Flex>
);

export default MainLayout;
