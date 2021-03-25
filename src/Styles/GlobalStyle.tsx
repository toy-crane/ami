import React from "react";
import { Global, css } from "@emotion/react";

const globalStyle = css`
	ul {
		margin: 0;
		liststyletype: "none";
	}
`;

export default () => <Global styles={globalStyle} />;
