import React from "react";
import { Grid } from "theme-ui";
import { Drawer, Heading } from "components";
import Content from "./contents";

const ChallangeFAQSection: React.FC = (props) => (
	<Grid sx={{ gap: 3 }}>
		<Heading variant="sectionTitle">자주 묻는 질문</Heading>
		<Grid sx={{ gap: 2 }}>
			{Content.map(({ key, text, title }) => (
				<Drawer key={key} text={text} title={title}></Drawer>
			))}
		</Grid>
	</Grid>
);

export default ChallangeFAQSection;
