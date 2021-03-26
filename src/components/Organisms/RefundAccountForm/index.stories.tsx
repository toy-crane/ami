import React from "react";
import { RefundAccountForm } from ".";

export default {
	title: "Organisms/Refund Account Form",
	component: RefundAccountForm,
};

export const basic = () => (
	<RefundAccountForm
		sx={{ width: "smallContainer" }}
		onSubmit={() => console.log("hello")}
	></RefundAccountForm>
);
