/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Button, Flex, Heading, Text } from "theme-ui";
import Container from "../Layout/Container";
import { useHistory } from "react-router-dom";

const NotFound = () => {
	let history = useHistory();

	return (
		<Container sx={{ width: "480px" }}>
			<Flex
				sx={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Heading as="h1" my={3}>
					Page Not Found....
					<span role="img" aria-label="Sad">
						😭😭
					</span>
				</Heading>
				<Image src="/illustration/404_notfound.svg" my={4} />
				<Button
					my={2}
					onClick={() => {
						history.goBack();
					}}
				>
					돌아가기
				</Button>
			</Flex>
		</Container>
	);
};

export default NotFound;
