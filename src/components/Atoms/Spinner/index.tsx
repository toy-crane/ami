import BeatLoader from "react-spinners/BeatLoader";
import { Flex } from "theme-ui";
import React from "react";
import { useThemeUI } from "theme-ui";

interface SpinnerProps {
	size?: number;
	loading: boolean;
}

const Spinner = ({ size, loading }: SpinnerProps) => {
	const {
		theme: { colors },
	} = useThemeUI();
	return (
		<Flex sx={{ justifyContent: "center", alignItems: "center" }}>
			<BeatLoader
				size={size}
				loading={loading}
				color={colors && colors["primary"]}
			></BeatLoader>
		</Flex>
	);
};
export default Spinner;
