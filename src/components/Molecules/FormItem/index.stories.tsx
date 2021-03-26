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
			defaultValue="카카오뱅크"
			options={["국민", "신한"]}
		></Select>
	</FormItem>
);
