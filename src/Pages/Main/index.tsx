/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Hero from "../../components/Organisms/Hero";
import TextCardGroup from "../../components/Organisms/TextCardGroup";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			textCardGroup={<TextCardGroup />}
		></MainTemplate>
	);
};

export default Main;
