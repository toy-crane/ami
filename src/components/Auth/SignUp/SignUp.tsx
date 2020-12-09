/** @jsxRuntime classic */
/** @jsx jsx */
import {
	jsx,
	Link,
	Button,
	Flex,
	Heading,
	Image,
	Text,
} from "theme-ui";

const SignUp = () => {
	return (
		<Flex
			sx={{
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Heading as="h1" my={2}>
				회원 가입하기
			</Heading>
			<Image src="/illustration/sign-in.svg" width="500px" my={3}></Image>
			<Link href="http://localhost:4000/github" my={2}>
				<Button variant="github">
					<Flex sx={{ justifyContent: "center", alignItems: "center" }}>
						<Image src="/social/github-logo.svg" mx={2}></Image>
						<Text mx={2}>Github로 시작하기</Text>
					</Flex>
				</Button>
			</Link>
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
