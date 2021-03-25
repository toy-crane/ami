import { ClassDescContainer } from "components";
import React from "react";
import { Text } from "theme-ui";

export interface ContentProps {
	type: 1 | 2 | 3 | 4;
	hasDivider?: boolean;
}

const ChallangeDescription = ({ type, hasDivider }: ContentProps) => {
	switch (type) {
		case 1:
			return (
				<ClassDescContainer
					title="코딩 챌린지는 어떤 것인가요?"
					hasDivider={hasDivider}
				>
					<Text>
						Code Pot, 개발 챌린지는 혼자서 꾸준히 공부가 하기 어려운 분들을 위해
						예치금으로 동기부여를 할 수 있도록하는 프로그램입니다.
					</Text>
				</ClassDescContainer>
			);

		case 2:
			return (
				<ClassDescContainer
					title="챌린지는 어떻게 진행 되나요?"
					hasDivider={hasDivider}
				>
					<ul>
						<li>
							책, 블로그, 강의 등 각자의 속도에 맞추어 일주일 간 학습합니다.
						</li>
						<li>
							마감날 자정까지 정해진 github에 일주일간 배운 내용을 요약하여
							커밋합니다.
						</li>
						<li>
							리뷰 작성을 마친 후 다른 챌린저들이 쓴 글들을 보고, 자유롭게
							리뷰를 남깁니다.
						</li>
						<li>
							다음 날 챌린지 리더가 제출한 리뷰를 확인하고, 챌린지 비용을
							정산합니다.
						</li>
					</ul>
				</ClassDescContainer>
			);
		case 3:
			return (
				<ClassDescContainer
					title="어떤 사람이 적합한가요?"
					hasDivider={hasDivider}
				>
					<ul>
						<li>
							React 챌린지이기 때문에, 기본적인 JavaScript 이해도를 요구합니다.
						</li>
						<li>
							자기 주도적으로 학습하며 최대한 스스로 문제를 해결해 나갈 수 있는
							분을 요구합니다.
						</li>
					</ul>
				</ClassDescContainer>
			);
		case 4:
			return (
				<ClassDescContainer title="챌린지 상세 안내" hasDivider={hasDivider}>
					<ul>
						<li>챌린지 비용: 105,000원 (예치금 100,000원, 운영비: 5,000원)</li>
						<li>챌린지 기간: 3/22 ~ 4/18 (총 4주)</li>
						<li>리뷰 제출 마감 시간: 매주 일요일 자정</li>
						<li>모집 인원: 최대 10명</li>
					</ul>
				</ClassDescContainer>
			);
	}
};

export default ChallangeDescription;
