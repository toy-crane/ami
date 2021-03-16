/** @jsxRuntime classic */
/** @jsx jsx */
import { Button, Logo } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import React from "react";
import { Heading, jsx } from "theme-ui";

interface AuthSectionProps {}

const AuthSection: React.FC<AuthSectionProps> = (props: AuthSectionProps) => {
	return (
		<React.Fragment>
			<Heading variant="styles.h2" mb={5}>
				<br />
				꾸준히 코딩하는
				<br />
				<span sx={{ color: "primary50" }}>습관</span> 만들기
			</Heading>
			<Button variant="github" href="/" icon={ICONS.github}>
				Github으로 바로 시작하기
			</Button>
		</React.Fragment>
	);
};

export default AuthSection;
