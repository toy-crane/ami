import moment from "moment";
import "moment/locale/ko";
import React from "react";
import { Image, Text, Grid, Box, Heading, Badge, Link } from "theme-ui";
import { language, status, LanguageSet, StatusSet } from "./constants";

interface CardProps {
	language: language;
	status: status;
	to: string;
	start_at: Date;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
	const { image, desc, title } = LanguageSet[props.language];
	return (
		<Link href={props.to}>
			<Grid
				sx={{
					border: "1px solid",
					borderColor: "gray05",
					backgroundColor: "white",
					borderRadius: 8,
				}}
				p={3}
			>
				<Image src={image} />
				<Box>
					<Badge variant={StatusSet[props.status].variant}>
						{StatusSet[props.status].text}
					</Badge>
					<Heading variant="styles.h5" mb={1}>
						{title}
					</Heading>
					<Text sx={{ fontSize: 2 }} mb={3}>
						{desc}
					</Text>
					<Text sx={{ fontSize: 1, color: "gray80" }}>
						첫 시작일 | {moment(props.start_at).format("MM/DD(dd)")}
					</Text>
				</Box>
			</Grid>
		</Link>
	);
};

export default Card;
