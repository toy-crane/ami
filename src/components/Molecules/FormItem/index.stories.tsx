import { BANK_LIST } from "commons/constants/bank";
import { Select } from "components";
import React from "react";
import FormItem from ".";

export default {
	title: "Molecules/Form Item",
	component: FormItem,
};
export const SelectForm = () => (
	<FormItem label="은행" sx={{ margin: 1 }}>
		<Select
			name="bankName"
			defaultValue="카카오뱅크"
			options={BANK_LIST}
		></Select>
	</FormItem>
);
