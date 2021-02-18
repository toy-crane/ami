/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import DescSectionGroup from "../../components/Organisms/DescSectionGroup";
import Hero from "../../components/Organisms/Hero";
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
