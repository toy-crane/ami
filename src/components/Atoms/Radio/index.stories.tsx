import React from "react";
import RadioButton from ".";

export default {
	title: "Atoms/Radio Button",
	component: [RadioButton],
};

export const Basic = () => (
	<RadioButton name="card" label="신용 카드"></RadioButton>
);
