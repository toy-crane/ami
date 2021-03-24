import { ChallangeDescription } from "components";
import React from "react";
import { Grid } from "theme-ui";

const ChallangeDescSection = () => {
	return (
		<Grid sx={{ gap: 4 }}>
			<ChallangeDescription type={1} hasDivider={true} />
			<ChallangeDescription type={2} hasDivider={true} />
			<ChallangeDescription type={3} hasDivider={false} />
		</Grid>
	);
};

export default ChallangeDescSection;
