import React from "react";
import Select from ".";

export default {
	title: "Atoms/Select",
	component: Select,
};

export const Basic = () => (
	<Select
		defaultValue="typescript"
		options={["typescript", "javascript", "react"]}
	></Select>
);
