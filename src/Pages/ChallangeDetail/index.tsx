import React from "react";
import ChallangeDetailTemplate from "./templates";
import ChallangeDescSection from "components/Organisms/ChallangeDescSection";

const ChallangeDetail = () => {
	return (
		<ChallangeDetailTemplate
			challangeDesc={<ChallangeDescSection />}
		></ChallangeDetailTemplate>
	);
};

export default ChallangeDetail;
