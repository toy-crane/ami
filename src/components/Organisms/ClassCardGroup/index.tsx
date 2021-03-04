import React from "react";
import { Grid, Box, Heading } from "theme-ui";
import ClassCard, { ClassCardProps } from "../../Molecules/ClassCard";

interface ClassCardGroupProps {
	cards?: ClassCardProps[];
}

const ClassCardGroup: React.FC<ClassCardGroupProps> = (
	props: ClassCardGroupProps
) => (
	<Box>
		<Heading variant="styles.h2" mb={[3,4]}>
			모집중인 챌린지
		</Heading>
		<Grid sx={{ gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"] }}>
			{props.cards ? (
				props.cards.map((card) => (
					<ClassCard
						id={card.id}
						to={card.to}
						language={card.language}
						status={card.status}
						start_at={card.start_at}
					/>
				))
			) : (
				<div>카드가 없습니다.</div>
			)}
		</Grid>
	</Box>
);

export default ClassCardGroup;
