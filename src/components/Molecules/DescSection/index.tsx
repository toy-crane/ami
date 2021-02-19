/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { Box, Heading, jsx, Text, Image } from "theme-ui";
import Grid from "../../Layout/Grid";
import sectionImage1 from "../../../assets/img/mainSection/section_1.png";
import sectionImage2 from "../../../assets/img/mainSection/section_2.png";
import sectionImage3 from "../../../assets/img/mainSection/section_3.svg";

interface DescSectionProps {
	type: 0 | 1 | 2;
}

export interface SectionContent {
	imagePosition?: "left" | "right";
	boldTitle: string;
	title: string;
	desc: string;
	image: string;
}

const SectionContents: SectionContent[] = [
	{
		boldTitle: "챌린지 ",
		title: "찾기",
		imagePosition: "left",
		desc:
			"헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 국가는 모성의 보호를 위하여 노력하여야 한다. 피고인의 자백이 고문·폭행·협박·구속의 부당한 장기화 또는 기망 기타의 방법에 의하여 자의로 진술된 것이 아니라고 인정될 때 또는 정식재판에 있어서 피고인의 자백이 그에게 불리한 유일한 증거일 때에는 이를 유죄의 증거로 삼거나 이를 이유로 처벌할 수 없다.",
		image: sectionImage1,
	},
	{
		boldTitle: "배운 것",
		title: "을 기록으로 남기기",
		imagePosition: "right",
		desc:
			"헌법재판소는 법률에 저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에 관한 규칙을 제정할 수 있다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국회의원과 정부는 법률안을 제출할 수 있다. 국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.",
		image: sectionImage2,
	},
	{
		boldTitle: "예치금",
		title: "으로 동기부여하기",
		imagePosition: "left",
		desc:
			"대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 대통령의 국법상 행위는 문서로써 하며, 이 문서에는 국무총리와 관계 국무위원이 부서한다. 군사에 관한 것도 또한 같다.",
		image: sectionImage3,
	},
];

const DescSection: React.FC<DescSectionProps> = (props: DescSectionProps) => {
	const { imagePosition, boldTitle, title, desc, image } = SectionContents[
		props.type
	];

	let imageGridStyle, descGridStyle;
	if (imagePosition === "right") {
		imageGridStyle = {
			gridColumn: ["2 / span 4", "9 / span 4"],
			order: [1, 2],
		};
		descGridStyle = { gridColumn: ["span 6", "span 7"], order: [2, 1] };
	} else {
		imageGridStyle = { gridColumn: ["2 / span 4", "span 4"] };
		descGridStyle = { gridColumn: ["span 6", "6 / span 7"] };
	}

	return (
		<Grid>
			<Image src={image} sx={{ ...imageGridStyle }} mb={[3, 0]} />
			<Box sx={{ alignSelf: "center", ...descGridStyle }}>
				<Heading variant="styles.h3" mb={3}>
					<span sx={{ color: "secondary50" }}>{boldTitle}</span>
					{title}
				</Heading>
				<Text>{desc}</Text>
			</Box>
		</Grid>
	);
};

export default DescSection;
