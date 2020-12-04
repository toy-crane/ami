/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Container: React.FunctionComponent = (props) => (
	<div
		{...props}
		sx={{
			maxWidth: "container",
			mx: "auto",
			px: 3,
		}}
	/>
);

export default Container;
