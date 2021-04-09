import React from "react";
import {
	Avatar as ThemeUIAvatar,
	AvatarProps as ThemeUIAvatarProps,
} from "theme-ui";
import defaultAvatar from "./defaultAvatar.svg";

export interface AvatarProps extends ThemeUIAvatarProps {
	src?: string;
}

const Avatar = (props: AvatarProps) => {
	return <ThemeUIAvatar {...props}></ThemeUIAvatar>;
};

Avatar.defaultProps = {
	src: defaultAvatar,
	size: 40,
};

export default Avatar;
