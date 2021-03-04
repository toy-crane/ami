/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import ChallangeSection from "../../components/Organisms/ChallengeSection";
import { sampleCards } from "../../components/Organisms/ChallengeSection/ChallengeSection.stories";
import EpilogueSection from "../../components/Organisms/EpilogueSection";
import FAQSection from "../../components/Organisms/FAQSection";
import Hero from "../../components/Organisms/Hero";
import MainTemplate from "./templates";
const Main = () => {
	return (
		<MainTemplate
			hero={<Hero />}
			ChallangeSection={
				<ChallangeSection cards={sampleCards}></ChallangeSection>
			}
			EPSection={<EpilogueSection />}
			FAQSection={<FAQSection />}
		></MainTemplate>
	);
};

export default Main;
