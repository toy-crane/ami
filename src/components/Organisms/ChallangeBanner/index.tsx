import React from "react";
import { Grid, Box, Heading, Text, Image, Badge } from "theme-ui";
import typescriptImg from "../../../assets/img/languages/typescript.svg";

interface ChallangeBannerProps {
	color?: string;
}

const ChallangeBanner = ({ color }: ChallangeBannerProps) => (
	<Grid
		sx={{
			gap: [4, 2],
			gridTemplateColumns: ["1fr", "300px 1fr"],
			justifyItems: ["center", "stretch"],
		}}
	>
		<Image src={typescriptImg} width="250px" />
		<Box sx={{ alignSelf: "end", color: color || "white" }}>
			<Badge>4주</Badge>
			<Badge variant="secondary" ml={1}>
				매주 일요일까지
			</Badge>
			<Heading variant="styles.h4">TypeScript 챌린지 2기</Heading>
			<Text variant="styles.subtitle" sx={{ color: color || "white" }}>
				단단한 javascript 코드가 만들고 싶다면?
			</Text>
			<Text variant="caption" sx={{ color: color || "white" }}>
				첫 시작일 | 2020-01-03
			</Text>
		</Box>
	</Grid>
);

export default ChallangeBanner;
