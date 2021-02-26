import React, { useState } from "react";
import { Box, Text } from "theme-ui";
import Icon from "../../Atoms/Icon";
import { ICONS } from "../../Atoms/Icon/constants";

interface DrawerProps {
	title: string;
	text: string;
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
	const [showContent, setShowContent] = useState("none");
	const handleClick = () => {
		if (showContent === "none") {
			setShowContent("block");
		} else {
			setShowContent("none");
		}
	};
	return (
		<Box
			sx={{
				border: "1px solid",
				borderColor: "gray05",
				backgroundColor: "white",
				borderRadius: 8,
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					cursor: "pointer",
					":hover": {
						color: "gray80",
					},
					padding: 3,
				}}
				onClick={handleClick}
			>
				<Text>{props.title}</Text>
				<Icon icon={ICONS.menu} height={16}></Icon>
			</Box>
			<Text p={3} sx={{ display: showContent }}>
				{props.text}
			</Text>
		</Box>
	);
};

export default Drawer;
