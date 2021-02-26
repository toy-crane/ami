/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import ClassCardGroup from "../../components/Organisms/ClassCardGroup";
import { sampleCards } from "../../components/Organisms/ClassCardGroup/ClassCardGroup.stories";
import Hero from "../../components/Organisms/Hero";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			classCardGroup={<ClassCardGroup cards={sampleCards}></ClassCardGroup>}
		></MainTemplate>
	);
};

export default Main;
