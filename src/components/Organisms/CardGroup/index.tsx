import React from "react";
import { Grid, Box, Heading, jsx } from "theme-ui";
import Card, { CardProps } from "../../Molecules/Card";

interface CardGroupProps {
	cards?: CardProps[];
}

const CardGroup: React.FC<CardGroupProps> = (props: CardGroupProps) => (
	<Box>
		<Heading variant="styles.h3" mb={4}>
			모집중인 챌린지
		</Heading>
		<Grid sx={{ gridTemplateColumns: ["repeat(2, 1fr)", "repeat(4, 1fr)"] }}>
			{props.cards ? (
				props.cards.map((card) => (
					<Card
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

export default CardGroup;
