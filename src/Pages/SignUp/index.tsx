/** @jsxRuntime classic */
/** @jsx jsx */
import { Heading, jsx } from "theme-ui";
import SignUpTemplate from "./templates";
import { Button } from "components";
import { ICONS } from "components/Atoms/Icon/constants";

const SignUpTitle = () => (
	<Heading variant="pageTitle">
		꾸준히 코딩하는
		<br />
		<span sx={{ color: "primary50" }}>습관</span> 만들기
		<br />
		프로젝트
	</Heading>
);

const SignUpContent = () => (
	<Button
		variant="github"
		href="http://localhost:4000/auth/github"
		width="100%"
		icon={ICONS.github}
	>
		gitHub으로 시작하기
	</Button>
);

const SignUp = () => {
	return (
		<SignUpTemplate
			title={<SignUpTitle />}
			content={<SignUpContent />}
		></SignUpTemplate>
	);
};

export default SignUp;
