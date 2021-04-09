import { Container } from "components";
import React from "react";
import MyPageSection from ".";
export default {
	title: "Organisms/My Page Section",
	component: MyPageSection,
};
export const Basic = () => (
	<Container>
		<MyPageSection></MyPageSection>
	</Container>
);
