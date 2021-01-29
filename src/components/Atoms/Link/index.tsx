import React from "react";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

export interface LinkProps extends ThemeUILinkProps {}

const Link: React.FC<LinkProps> = (props: LinkProps) => (
	<ThemeUILink {...props}>{props.children}</ThemeUILink>
);

export default Link;
