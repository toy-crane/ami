import React from "react";
import { Grid, Box, Heading } from "theme-ui";
import Drawer, { DrawerProps } from "../../Molecules/Drawer";

const FAQContents: DrawerProps[] = [
	{
		id: 1,
		title: "환불 규정은 어떻게 되나요?",
		text:
			"남은 스터디는 전체 비용에서 1/4을 하여 남은 횟수 만큼을 돌려 드립니다. 환불은 반드시 1주 전에 말씀해주셔야 해당 주차부터 환불이 적용됩니다. 과제를 내지 못해 참가하지 못한 스터디 비용은 환불 되지 않습니다.",
	},
	{
		id: 2,
		title: "어떤 사람이 적합한가요?",
		text:
			"React 스터디이기 때문에, 기본적인 JavaScript 이해도를 요구합니다. 자기 주도적으로 학습하며 최대한 스스로 문제를 해결해 나갈 수 있는 분을 요구합니다.",
	},
	{
		id: 3,
		title: "모집 인원은 몇 명인가요?",
		text: "최대 10명입니다.",
	},
];

const FAQSection: React.FC = (props) => (
	<Box>
		<Heading variant="styles.h4" mb={3}>
			자주 묻는 질문	
		</Heading>
		<Grid sx={{ gap: 1 }}>
			{FAQContents.map(({ id, text, title }) => (
				<Drawer id={id} text={text} title={title}></Drawer>
			))}
		</Grid>
	</Box>
);

export default FAQSection;
