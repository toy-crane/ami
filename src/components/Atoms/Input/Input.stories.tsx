import React from "react";
import Input from ".";

export default {
	title: "Atoms/Input",
	component: Input,
};

export const InputWithText = () => (
	<Input placeholder="비밀번호" name="password"></Input>
);
export const InputWithInvalidValue = () => (
	<Input placeholder="비밀번호" invalid={true} name="password"></Input>
);
