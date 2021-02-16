/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Hero from "../../components/Organisms/Hero";
import MainTemplate from "./templates";
const Main = () => {
	return <MainTemplate hero={<Hero />}></MainTemplate>;
};

export default Main;
