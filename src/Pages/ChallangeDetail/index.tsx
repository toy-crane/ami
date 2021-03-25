import React from "react";
import ChallangeDetailTemplate from "./templates";
import ChallangeDescSection from "components/Organisms/ChallangeDescSection";
import { ChallangeFAQSection } from "components";
import ChallangeBanner from "components/Organisms/ChallangeBanner";

const ChallangeDetail = () => {
	return (
		<ChallangeDetailTemplate
			challangeBanner={<ChallangeBanner />}
			challangeDesc={<ChallangeDescSection />}
			challangeFAQSection={<ChallangeFAQSection />}
		></ChallangeDetailTemplate>
	);
};

export default ChallangeDetail;
