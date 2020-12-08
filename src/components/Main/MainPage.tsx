/** @jsxRuntime classic */
/** @jsx jsx */
import { Button, jsx, Image, Box, Grid } from "theme-ui";

const Main = () => {
	return (
		<Grid gap={4} columns={"repeat(auto-fit, minmax(300px, 1fr))"}>
			<Box>
				<h1 sx={{ variant: "styles.h1" }}>
					<span sx={{ color: "primary" }}>습관</span>처럼 코딩하자.
				</h1>
				<p>
					코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠?
					<br />
					코드팟과 함께 꾸준히 코딩하는 습관을 만들어 봐요!
				</p>
				<Button variant="primary">8주 코딩 챌린지 도전하기</Button>
			</Box>
			<Box>
				<Image src="/illustration/undraw_pair_programming.svg" />
			</Box>
		</Grid>
	);
};

export default Main;
