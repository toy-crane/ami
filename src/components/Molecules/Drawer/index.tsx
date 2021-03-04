import React, { useState } from "react";
import { Box, Text } from "theme-ui";
import Icon, { IconProps } from "../../Atoms/Icon";
import { ICONS } from "../../Atoms/Icon/constants";

interface DrawerProps {
	title: string;
	text: string;
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
	const [showContent, setShowContent] = useState<boolean>(false);
	const [arrowIcon, setArrowIcon] = useState<ICONS>(ICONS.chevron_right);
	const handleClick = () => {
		if (showContent) {
			setShowContent(false);
			setArrowIcon(ICONS.chevron_right);
		} else {
			setShowContent(true);
			setArrowIcon(ICONS.chevron_down);
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
				<Text color="inherit">{props.title}</Text>
				<Icon icon={arrowIcon} size={16}></Icon>
			</Box>
			{showContent && (
				<Text p={3} color="gray100">
					{props.text}
				</Text>
			)}
		</Box>
	);
};

export default Drawer;
