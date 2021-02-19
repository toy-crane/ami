/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Heading, Flex, Text } from "theme-ui";
import { LinkButton } from "../../Atoms/Button";
const Hero = () => (
	<Flex sx={{ flexDirection: "column", alignItems: "flex-start" }}>
		<Heading variant="styles.h1" mb={4}>
			<span sx={{ color: "primary50" }}>습관</span>처럼
			<br />
			꾸준히 코딩하자.
		</Heading>
		<Text mb={4}>
			코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠?
			<br />
			매주 공부한 내용을 github에 기록하고, 다른 개발자들과 의견을 나누며,
			<br />
			모두 함께 꾸준히 코딩하는 습관을 만들어 봐요!
		</Text>
		<LinkButton variant="primary" route="/list">
			4주 코딩 챌린지 도전하기
		</LinkButton>
	</Flex>
);

export default Hero;
