import React from "react";
import { Grid } from "theme-ui";
import ClassCard, { ClassCardProps } from "../../Molecules/ClassCard";
import SectionContainer from "../SectionContainer/SectionContainer";

interface ChallangeSectionProps {
	cards?: ClassCardProps[];
}

const ChallangeSection: React.FC<ChallangeSectionProps> = (
	props: ChallangeSectionProps
) => (
	<SectionContainer title="모집중인 챌린지">
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
	</SectionContainer>
);

export default ChallangeSection;
