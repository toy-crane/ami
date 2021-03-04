import React from "react";
import { Story } from "@storybook/react";
import Drawer from ".";
export default {
	title: "Molecules/Drawer",
	component: Drawer,
};

const Template: Story = (args) => (
	<Drawer
		id={1}
		title="챌린지는 어떻게 진행되나요?"
		text="셀프 페이스 4주 코스예요. 자기 일정에 맞게 할 수 있어요!
		매주 한 개의 앱/웹 서비스를 케이스 스터디하여 글로 작성하는 챌린지예요.
		작심삼일을 막기 위해 참가비를 받아요. 성공 시 환급해드리고 있어요.
		특정 시간에 모이거나, 그룹장이 이끌고 가는 형태가 아니에요.
		다른 사람의 인사이트에 자유롭게 댓글로 소통하고 있어요."
	></Drawer>
);
export const Basic = Template.bind({});
