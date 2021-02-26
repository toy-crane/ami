import moment from "moment";
import "moment/locale/ko";
import React from "react";
import { Image, Text, Grid, Box, Heading, Badge, Link } from "theme-ui";
import { language, status, LanguageSet, StatusSet } from "./constants";

export interface CardProps {
	id: string;
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
			>
				<Box sx={{ display: "flex", position: "relative" }}>
					<Image
						src={image}
						sx={{
							width: "100%",
							height: "auto",
							backgroundColor: "gray0",
						}}
					/>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							height: "100%",
							width: "100%",
							opacity: props.status === "inProgress" ? 0 : 0.4,
							backgroundColor: "gray100",
						}}
					></Box>
					<Badge
						variant={StatusSet[props.status].variant}
						sx={{ position: "absolute", mt: "8px", ml: "8px" }}
					>
						{StatusSet[props.status].text}
					</Badge>
				</Box>
				<Box p={3}>
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
