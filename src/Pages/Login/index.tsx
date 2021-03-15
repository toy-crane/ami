/** @jsxRuntime classic */
/** @jsx jsx */
import MyPageTemplate from "./templates";
import { Button } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import { jsx, Link, Flex, Heading, Image, Text, Box } from "theme-ui";

const Login = () => {
	return (
		<MyPageTemplate>
			<Flex
				sx={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box mb={4}>
					<Heading as="h1">로그인</Heading>
				</Box>
				<Image src="/illustration/login.svg" mb={4} />
				<Button
					variant="github"
					href="http://localhost:4000/github"
					icon={ICONS.github}
				>
					Github로 로그인하기
				</Button>
				<Text mb={2}>
					<Link href="/sign-up">코드팟 계정이 없으신가요?</Link>
				</Text>
			</Flex>
		</MyPageTemplate>
	);
};

export default Login;
