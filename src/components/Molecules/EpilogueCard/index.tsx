import React from "react";
import { Flex, Text, Heading } from "theme-ui";
import Avatar from "../../Atoms/Avatar";

export interface EpilogueCardProps {
	id: string;
	text: string;
	name: string;
	job: string;
	imgSrc: string;
}

const EpilogueCard: React.FC<EpilogueCardProps> = (
	props: EpilogueCardProps
) => {
	return (
		<Flex
			sx={{
				flexDirection: "column",
				border: "1px solid",
				borderColor: "gray05",
				backgroundColor: "white",
				borderRadius: 8,
				padding: 3,
			}}
		>
			<Flex sx={{ alignItems: "center" }} mb="3">
				<Avatar src={props.imgSrc} />
				<Heading variant="styles.h7" ml="3">
					{props.name} | {props.job}
				</Heading>
			</Flex>
			<Text sx={{ fontSize: 2 }} mb={3}>
				{props.text}
			</Text>
		</Flex>
	);
};

export default EpilogueCard;
