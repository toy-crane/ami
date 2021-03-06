import React from "react";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

interface LinkProps extends ThemeUILinkProps {
	href: string;
	children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = (props: LinkProps) => {
	return (
		<ThemeUILink {...props} href={props.href}>
			{props.children}
		</ThemeUILink>
	);
};

export default Link;
