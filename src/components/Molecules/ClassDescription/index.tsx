import { ClassDescContainer, Divider } from "components";
import React from "react";
import { Text } from "theme-ui";

export interface ContentProps {}

const ClassDescription = (props: ContentProps) => {
	return (
		<ClassDescContainer title="챌린지는 어떻게 진행되나요?" hasDivider={true}>
			<Text>
				매주 github을 통해 한 주 동안 배운 것을 정리하여 정해진 깃허브 저장소에
				PR을 요청합니다. <br />
				챌린지 peer가 올라온 내용들을 보고, github에서 code review를 합니다.
				<br />
				1달 동안 총 4회의 챌린지가 진행됩니다.
			</Text>
		</ClassDescContainer>
	);
};

export default ClassDescription;
