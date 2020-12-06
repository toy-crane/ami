/** @jsxRuntime classic */
/** @jsx jsx */
import { AspectImage, Flex, Heading, jsx, Image, Box, Grid } from "theme-ui";

const Main = () => {
	return (
		<Grid gap={1} columns={"repeat(auto-fit, minmax(300px, 1fr))"}>
			<Box sx={{ "align-self": "center" }}>
				<Heading>나도 프로덕트 잘 만들고 싶다.</Heading>
			</Box>
			<Box>
				<Image src="/illustration/undraw_pair_programming.svg"></Image>;
			</Box>
		</Grid>
	);
};

export default Main;

{
	/* <Flex
			sx={{
				alignItems: "center",
			}}
		>
			<Box>
				<Heading>나도 프로덕트 잘 만들고 싶다.</Heading>
			</Box>
			<Box>
				<Image src="/illustration/code_review.svg"></Image>;
			</Box>
		</Flex> */
}
