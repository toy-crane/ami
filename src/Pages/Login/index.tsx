/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import LoginTemplate from "./templates";
import AuthSection from "components/Organisms/AuthSection";

const Login = () => {
	return <LoginTemplate login={<AuthSection type="login" />}></LoginTemplate>;
};

export default Login;
