/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx, Heading, Text, Box, Flex } from "theme-ui";
import { Avatar, Divider } from "components";
import ClassCard from "components/Molecules/ClassCard";

const MyPageSection = () => (
	<Grid sx={{ gap: [3, 4] }}>
		<Grid>
			<Flex>
				<Flex sx={{ justifyContent: "center", alignItems: "center" }} mr={3}>
					<Avatar size="64px"></Avatar>
				</Flex>
				<Box>
					<Heading variant="styles.h4">김한울님</Heading>
					<Text>alwaysfun2183@gmail.com</Text>
				</Box>
			</Flex>
		</Grid>
		<Divider></Divider>
		<Grid sx={{ gap: 2 }}>
			<Heading variant="styles.h4">나의 정보</Heading>
			<Flex sx={{ flexDirection: "column" }}>
				<Heading variant="styles.subtitle" color="gray40">
					예치금 환급 계좌
				</Heading>
				<Text variant="styles.bodyMedium">110-217-985246 신한은행</Text>
			</Flex>
		</Grid>
		<Divider></Divider>
		<Grid sx={{ gap: 2 }}>
			<Heading variant="styles.h4">참여중인 챌린지</Heading>
			<Grid sx={{ gridTemplateColumns: ["1fr", "1fr 1fr 1fr 1fr"] }}>
				<ClassCard
					key="1"
					to="/"
					language="typescript"
					status="inProgress"
					start_at={new Date()}
				></ClassCard>
				<ClassCard
					key="1"
					to="/"
					language="typescript"
					status="inProgress"
					start_at={new Date()}
				></ClassCard>
			</Grid>
		</Grid>
		<Divider></Divider>
		<Grid sx={{ gap: 2 }}>
			<Heading variant="styles.h4">입금 대기중인 챌린지</Heading>
			<Grid sx={{ gridTemplateColumns: ["1fr", "1fr 1fr 1fr 1fr"] }}>
				<ClassCard
					key="1"
					to="/"
					language="typescript"
					status="inProgress"
					start_at={new Date()}
				></ClassCard>
				<ClassCard
					key="1"
					to="/"
					language="typescript"
					status="inProgress"
					start_at={new Date()}
				></ClassCard>
			</Grid>
		</Grid>
	</Grid>
);

export default MyPageSection;
