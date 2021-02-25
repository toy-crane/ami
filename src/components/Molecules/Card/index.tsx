import React from "react";
import { Image, Text, Grid, Box, Heading, Badge, Link } from "theme-ui";
import typescriptImg from "../../../assets/img/languages/typescript.svg";
import reactImg from "../../../assets/img/languages/react.svg";
import JSImg from "../../../assets/img/languages/javascript.svg";
import graphqlImg from "../../../assets/img/languages/graphql.svg";
import pythonImg from "../../../assets/img/languages/python.svg";
import { responsePathAsArray } from "graphql";

const languageImg = {
	typescript: typescriptImg,
	react: reactImg,
	javascript: JSImg,
	python: pythonImg,
	graphql: graphqlImg,
} as const;

type status = "inProgress" | "Close";
type statusObj = {
	text: string;
	variant: string;
};
const StatusSet: Record<status, statusObj> = {
	inProgress: { text: "모집중", variant: "primary" },
	Close: { text: "모집완료", variant: "secondary" },
};
interface CardProps {
	language: "typescript" | "react" | "javascript" | "python" | "graphql";
	status: status;
	to: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	return (
		<Link href={props.to}>
			<Grid
				sx={{
					maxWidth: "256px",
					border: "1px solid",
					borderColor: "gray05",
					borderRadius: 8,
				}}
				p={3}
			>
				<Image src={languageImg[props.language]} />
				<Box>
					<Badge variant={StatusSet[props.status].variant}>
						{StatusSet[props.status].text}
					</Badge>
					<Heading variant="styles.h5" mb={1}>
						타입스크립트 챌린지
					</Heading>
					<Text sx={{ fontSize: 2 }} mb={3}>
						단단한 javascript 코드가 만들고 싶다면?
					</Text>
					<Text sx={{ fontSize: 1, color: "gray80" }}>첫 시작일 2/24(토)</Text>
				</Box>
			</Grid>
		</Link>
	);
};

export default Card;
