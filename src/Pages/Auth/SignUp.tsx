/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Flex, Heading, Image, Text, Box } from "theme-ui";
import GitHubButton from "../../components/Button/GithubButton";
import { AuthLayout } from "../../components/Layout";

const SignUp = () => {
	return (
		<AuthLayout>
			<Flex
				sx={{
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box mb={4}>
					<Heading as="h1">회원 가입하기</Heading>
				</Box>
				<Image src="/illustration/sign-in.svg" mb={4} />
				<GitHubButton
					text="github으로 시작하기"
					url="http://localhost:4000/github"
				/>
				<Text mb={2}>
					이미 Code Pot 계정이 있으신가요?
					<Link href="/login">로그인</Link>
				</Text>
			</Flex>
		</AuthLayout>
	);
};

export default SignUp;
