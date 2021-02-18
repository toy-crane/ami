/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import DescSectionGroup from "../../components/Organisms/DescSectionGroup";
import Hero from "../../components/Organisms/Hero";
import TextCardGroup from "../../components/Organisms/TextCardGroup";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			DescSectionGroup={<DescSectionGroup />}
		></MainTemplate>
	);
};

export default Main;
