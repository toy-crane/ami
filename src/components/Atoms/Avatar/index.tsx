import React from "react";
import { Avatar as ThemeUIAvatar } from "theme-ui";

export interface AvatarProps {
	src: string;
}

const Badge: React.FC<AvatarProps> = (props: AvatarProps) => {
	return <ThemeUIAvatar {...props}></ThemeUIAvatar>;
};

export default Badge;
