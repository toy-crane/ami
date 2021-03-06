import React from "react";
import FormInput from ".";

export default {
	title: "Molecules/Input Form",
	component: FormInput,
};

export const NomalInput = () => (
	<FormInput
		label="ID"
		placeholder="id를 입력해주세요."
		sx={{ margin: 1 }}
		name="id"
	></FormInput>
);

export const InvalidInput = () => (
	<FormInput
		label="ID"
		name="id"
		placeholder="id를 입력해주세요."
		invalid={true}
		caption="잘못된 문자가 포함되어 있습니다."
		sx={{ margin: 1 }}
	></FormInput>
);
