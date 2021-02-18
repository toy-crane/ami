/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { Box, Heading, jsx, Text, Image } from "theme-ui";
import Grid from "../../Layout/Grid";

export interface DescSectionProps {
	imagePosition?: "left" | "right";
	boldTitle: string;
	title: string;
	desc: string;
	image: string;
}

const DescSection: React.FC<DescSectionProps> = (props: DescSectionProps) => {
	const { imagePosition, boldTitle, title, desc, image } = props;

	let imageGridStyle, descGridStyle;
	if (imagePosition === "right") {
		imageGridStyle = { gridColumn: ["span 6", "9 / span 4"], order: [1, 2] };
		descGridStyle = { gridColumn: ["span 6", "span 7"], order: [2, 1] };
	} else {
		imageGridStyle = { gridColumn: ["span 6", "span 4"] };
		descGridStyle = { gridColumn: ["span 6", "6 /span 7"] };
	}

	return (
		<Grid>
			<Image src={image} sx={{ ...imageGridStyle }} />
			<Box sx={{ alignSelf: "center", ...descGridStyle }}>
				<Heading variant="styles.h4" mb={2}>
					<span sx={{ color: "secondary50" }}>{boldTitle}</span>
					{title}
				</Heading>
				<Text>{desc}</Text>
			</Box>
		</Grid>
	);
};

export default DescSection;
