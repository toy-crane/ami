import React from "react";
import { AppRouter } from "../Router";
import { Box, Flex } from "rebass";

function App() {
	return (
		<Flex alignItems="center" justifyContent="center">
			<Box width={[1, 3 / 4, 3 / 4]}>
				<AppRouter></AppRouter>
			</Box>
		</Flex>
	);
}

export default App;
