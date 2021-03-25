import React from "react";
import ChallangeDetailTemplate from "./templates";
import ChallangeDescSection from "components/Organisms/ChallangeDescSection";
import { ChallangeFAQSection } from "components";

const ChallangeDetail = () => {
	return (
		<ChallangeDetailTemplate
			challangeDesc={<ChallangeDescSection />}
			challangeFAQSection={<ChallangeFAQSection />}
		></ChallangeDetailTemplate>
	);
};

export default ChallangeDetail;
