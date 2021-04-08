import React from "react";
import Checkbox from ".";

export default {
	title: "Atoms/Checkbox ",
	component: [Checkbox],
};

export const Basic = () => (
	<Checkbox
		name="agreement"
		label="구매조건 및 개인정보취급방침 동의 (필수)"
	></Checkbox>
);
