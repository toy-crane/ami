import { BANK_LIST } from "commons/constants/bank";
import React from "react";
import Select from ".";

export default {
	title: "Atoms/Select",
	component: Select,
};

export const Basic = () => (
	<Select
		name="bankCode"
		defaultValue="카카오 뱅크"
		options={BANK_LIST}
	></Select>
);
