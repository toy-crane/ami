/** @jsxRuntime classic */
/** @jsx jsx */
import { Button } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import React from "react";
import { Heading, jsx } from "theme-ui";

type SectionType = "login" | "signUp";
interface AuthSectionProps {
	type: SectionType;
}

const buttonText: Record<SectionType, string> = {
	login: "github로 로그인하기",
	signUp: "github로 바로 시작하기",
};

const AuthSection: React.FC<AuthSectionProps> = ({
	type,
}: AuthSectionProps) => {
	return (
		<React.Fragment>
			<Heading sx={{ variant: "text.heading", fontSize: 6 }} mb={5}>
				<br />
				꾸준히 코딩하는
				<br />
				<span sx={{ color: "primary50" }}>습관</span> 만들기
			</Heading>
			<Button
				variant="github"
				href="http://localhost:4000/github"
				width="100%"
				icon={ICONS.github}
			>
				{buttonText[type]}
			</Button>
		</React.Fragment>
	);
};

export default AuthSection;
