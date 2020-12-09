/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link, Flex, Heading, Image, Text } from "theme-ui";
import GitHubButton from "../../Button/GithubButton";

const SignUp = () => {
	return (
		<Flex
			sx={{
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Heading as="h1" my={3}>
				회원 가입하기
			</Heading>
			<Image src="/illustration/sign-in.svg" my={4} />
			<GitHubButton
				text="github으로 시작하기"
				url="http://localhost:4000/github"
			/>
			<Text my={2}>
				이미 Code Pot 계정이 있으신가요?
				<Link href="/login" mx={1}>
					로그인
				</Link>
			</Text>
		</Flex>
	);
};

export default SignUp;
