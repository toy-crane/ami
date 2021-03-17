/** @jsxRuntime classic */
/** @jsx jsx */
import { Button } from "components";
import React from "react";
import { Heading, jsx } from "theme-ui";

interface ActivationSectionProps {}

const ActivationSection = (props: ActivationSectionProps) => {
	return (
		<React.Fragment>
			<Heading sx={{ variant: "text.heading", fontSize: 6 }} mb={5}>
				추가 정보 입력하기
			</Heading>
			<Button variant="primary" href="/" width="100%">
				계정 생성하기
			</Button>
		</React.Fragment>
	);
};

export default ActivationSection;
