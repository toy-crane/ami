import React from "react";
import { Avatar as ThemeUIAvatar } from "theme-ui";
import defaultAvatar from "./defaultAvatar.svg";

export interface AvatarProps {
	src?: string;
}

const Avatar: React.FC<AvatarProps> = (props: AvatarProps) => {
	return <ThemeUIAvatar {...props}></ThemeUIAvatar>;
};

Avatar.defaultProps = {
	src: defaultAvatar,
};

export default Avatar;
