/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Flex, Heading, Image, Text } from "theme-ui";
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
			<Heading as="h1" my={3}>
				로그인
			</Heading>
			<Image src="/illustration/login.svg" my={4} />
			<GitHubButton
				text="github으로 로그인하기"
				url="http://localhost:4000/github"
			/>
			<Text my={2}>
				<Link href="/sign-up" mx={1}>
					코드팟 계정이 없으신가요?
				</Link>
			</Text>
		</Flex>
	);
};

export default Login;
