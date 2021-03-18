/** @jsxRuntime classic */
/** @jsx jsx */
import { Heading, jsx } from "theme-ui";
import LoginTemplate from "./templates";
import { Button } from "components";
import { ICONS } from "components/Atoms/Icon/constants";

const LoginTitle = () => (
	<Heading variant="pageTitle">
		꾸준히 코딩하는
		<br />
		<span sx={{ color: "primary50" }}>습관</span> 만들기
		<br />
		프로젝트
	</Heading>
);

const LoginContent = () => (
	<Button
		variant="github"
		href="http://localhost:4000/github"
		width="100%"
		icon={ICONS.github}
	>
		gitHub으로 로그인 하기
	</Button>
);

const Login = () => {
	return (
		<LoginTemplate
			title={<LoginTitle />}
			content={<LoginContent />}
		></LoginTemplate>
	);
};

export default Login;
