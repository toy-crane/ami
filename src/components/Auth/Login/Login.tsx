/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Flex, Heading, Image, Text, Box } from "theme-ui";
import GitHubButton from "../../Button/GithubButton";

const Login = () => {
	return (
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
			<GitHubButton
				text="github으로 로그인하기"
				url="http://localhost:4000/github"
			/>
			<Text mb={2}>
				<Link href="/sign-up">코드팟 계정이 없으신가요?</Link>
			</Text>
		</Flex>
	);
};

export default Login;
