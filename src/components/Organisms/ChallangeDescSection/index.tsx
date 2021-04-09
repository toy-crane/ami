import { ChallangeDescription } from "components";
import React from "react";
import { Grid } from "theme-ui";

const ChallangeDescSection = () => {
	return (
		<Grid sx={{ gap: [4, 5] }}>
			<ChallangeDescription type={1} hasDivider={true} />
			<ChallangeDescription type={2} hasDivider={true} />
			<ChallangeDescription type={3} hasDivider={true} />
			<ChallangeDescription type={4} hasDivider={true} />
		</Grid>
	);
};

export default ChallangeDescSection;
