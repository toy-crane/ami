import React from "react";
import { Box, Text } from "theme-ui";
import SubTitle from "../../Atoms/SubTitle";

export interface TextCardProps {
	title: string;
	content: string;
}
const TextCard: React.FC<TextCardProps> = (props: TextCardProps) => {
	return (
		<Box>
			<SubTitle>{props.title}</SubTitle>
			<Text mt={1} variant="styles.bodyLarge">
				{props.content}
			</Text>
		</Box>
	);
};

export default TextCard;
