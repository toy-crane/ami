/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import TextCard from "../../Molecules/TextCard";

const CardsContent = [
	{
		id: 1,
		title: "자기 주도적으로",
		text:
			"코드팟은 스스로의 필요에 의해 공부할 것을 정의하고, 실천해 나가는 것의 힘을 믿습니다.",
	},
	{
		id: 2,
		title: "배운 것을 기록으로",
		text:
			"배운 것을 기록하고, 스스로 회고하는 습관의 힘을 믿습니다. 조금이라도 배운 것을 기록하고 꾸준히 남겨 갈 수 있도록 코드팟이 함께 도와드리겠습니다.",
	},
	{
		id: 3,
		title: "동기 부여를 예치금으로 ",
		text:
			"배운 것을 기록하고, 스스로 회고하는 습관의 힘을 믿습니다. 조금이라도 배운 것을 기록하고 꾸준히 남겨 갈 수 있도록 코드팟이 함께 도와드리겠습니다.",
	},
];

export interface TextCardGroupProps {}
const TextCardGroup: React.FC<TextCardGroupProps> = (
	props: TextCardGroupProps
) => {
	return (
		<ul
			sx={{
				listStyle: "none",
				display: "grid",
				gridGap: 4,
				m: 0,
				p: 0,
				gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
			}}
		>
			{CardsContent.map(({ id, title, text }) => (
				<li key={id}>
					<TextCard title={title} content={text} />
				</li>
			))}
		</ul>
	);
};

export default TextCardGroup;
