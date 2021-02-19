/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import DescSection from "../../components/Molecules/DescSection";
import Hero from "../../components/Organisms/Hero";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			DescSectionGroup={[
				<DescSection type={0} />,
				<DescSection type={1} />,
				<DescSection type={2} />,
			]}
		></MainTemplate>
	);
};

export default Main;
