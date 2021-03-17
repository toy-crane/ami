import React from "react";
import FormInput from ".";

export default {
	title: "Molecules/Input Form",
	component: FormInput,
};

export const NomalInput = () => (
	<FormInput label="ID" placeholder="id를 입력해주세요."></FormInput>
);

export const InvalidInput = () => (
	<InputForm
		label="ID"
		placeholder="id를 입력해주세요."
		invalid={true}
		captionContent="잘못된 문자가 포함되어 있습니다."
	></InputForm>
);
