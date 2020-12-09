/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Header } from "./Header";
import Container from "./Container";

const AuthLayout: React.FC = ({ children }) => (
	<Flex
		sx={{
			flexDirection: "column",
		}}
	>
		<Header />
		<main>
			<Container sx={{ width: "480px" }}>{children}</Container>
		</main>
	</Flex>
);

export default AuthLayout;
