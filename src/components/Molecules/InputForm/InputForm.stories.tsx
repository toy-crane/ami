import React from "react";
import InputForm from ".";

export default {
	title: "Molecules/Input Form",
	component: InputForm,
};

export const NomalInput = () => (
	<InputForm label="ID" placeholder="id를 입력해주세요."></InputForm>
);

export const InvalidInput = () => (
	<InputForm label="ID" placeholder="id를 입력해주세요." invalid={true} captionContent="잘못된 문자가 포함되어 있습니다."></InputForm>
);
