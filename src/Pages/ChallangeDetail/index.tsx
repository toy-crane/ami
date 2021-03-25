import React from "react";
import ChallangeDetailTemplate from "./templates";
import ChallangeDescSection from "components/Organisms/ChallangeDescSection";
import { ChallangeFAQSection, RegisterBanner } from "components";
import ChallangeBanner from "components/Organisms/ChallangeBanner";

const ChallangeDetail = () => {
	return (
		<ChallangeDetailTemplate
			challangeBanner={<ChallangeBanner />}
			challangeDesc={<ChallangeDescSection />}
			challangeFAQSection={<ChallangeFAQSection />}
			registerBannder={<RegisterBanner ChallangeId={1} />}
		></ChallangeDetailTemplate>
	);
};

export default ChallangeDetail;
