/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import SignUpTemplate from "./templates";
import AuthSection from "components/Organisms/AuthSection";

const SignUp = () => {
	return (
		<SignUpTemplate signUp={<AuthSection type="signUp" />}></SignUpTemplate>
	);
};

export default SignUp;
