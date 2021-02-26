/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import CardGroup from "../../components/Organisms/CardGroup";
import { sampleCards } from "../../components/Organisms/CardGroup/CardGroup.stories";
import Hero from "../../components/Organisms/Hero";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			classCardGroup={<CardGroup cards={sampleCards}></CardGroup>}
		></MainTemplate>
	);
};

export default Main;
