/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import DescSection, { DescSectionProps } from "../../Molecules/DescSection";
import sectionImage1 from "../../../assets/img/mainSection/section_1.png";
import sectionImage2 from "../../../assets/img/mainSection/section_2.png";
import sectionImage3 from "../../../assets/img/mainSection/section_3.png";

interface sectionContent extends DescSectionProps {
	id: number;
}

const SectionContents: sectionContent[] = [
	{
		id: 1,
		boldTitle: "챌린지 ",
		title: "찾기",
		imagePosition: "left",
		desc:
			"코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠? 코드팟과 함께 꾸준히 코딩하는 습관을 만들어 봐요!",
		image: sectionImage1,
	},
	{
		id: 2,
		boldTitle: "배운 것",
		title: "을 기록으로 남기기",
		imagePosition: "right",
		desc:
			"코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠? 코드팟과 함께 꾸준히 코딩하는 습관을 만들어 봐요!",
		image: sectionImage2,
	},
	{
		id: 3,
		boldTitle: "예치금",
		title: "으로 동기부여하기",
		imagePosition: "left",
		desc:
			"코딩은 매일 매일 해야 실력이 늘어난다고 하는데, 혼자서 많이 힘드셨죠? 코드팟과 함께 꾸준히 코딩하는 습관을 만들어 봐요!",
		image: sectionImage3,
	},
];

export interface SectionGroupProps {}
const DescSectionGroup: React.FC<SectionGroupProps> = (
	props: SectionGroupProps
) => {
	return (
		<ul
			sx={{
				listStyle: "none",
				display: "grid",
				gridGap: 6,
				m: 0,
				p: 0,
			}}
		>
			{SectionContents.map(
				({ id, title, boldTitle, imagePosition, desc, image }) => (
					<li key={id}>
						<DescSection
							title={title}
							boldTitle={boldTitle}
							image={image}
							desc={desc}
							imagePosition={imagePosition}
						/>
					</li>
				)
			)}
		</ul>
	);
};

export default DescSectionGroup;
