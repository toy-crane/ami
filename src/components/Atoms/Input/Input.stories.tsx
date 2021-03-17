import React from "react";
import Input from ".";

export default {
	title: "Atoms/Input",
	component: Input,
};

export const InputWithText = () => <Input placeholder="비밀번호"></Input>;
export const InputWithInvalidValue = () => (
	<Input placeholder="비밀번호" invalid={true}></Input>
);
