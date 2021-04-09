import React from "react";
import { Grid } from "theme-ui";
import ChallangeDescription from ".";
export default {
	title: "Molecules/Challage Description",
	component: ChallangeDescription,
};
const Basic = () => (
	<Grid sx={{ gap: 4, justifyContent: "center" }}>
		<ChallangeDescription type={1}></ChallangeDescription>
	</Grid>
);
export { Basic };
