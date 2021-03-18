import React from "react";
import Spinner from ".";

export default {
	title: "Atoms/Spinner",
	component: [Spinner],
};

export const Basic = () => <Spinner loading={true}></Spinner>;
