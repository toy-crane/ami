import { Global } from "@emotion/react";
import React from "react";
import globalStyle from "../../Styles/GlobalStyle";
import { AppRouter } from "../Router";

function App() {
	return (
		<>
			<Global styles={globalStyle} />
			<AppRouter></AppRouter>
		</>
	);
}

export default App;
