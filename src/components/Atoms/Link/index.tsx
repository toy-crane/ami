import React from "react";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps extends ThemeUILinkProps {
	href: string;
	children?: React.ReactNode;
}

const isInLink = (href: string) => (href.startsWith("/") ? true : false);

const Link: React.FC<LinkProps> = ({ href, children }: LinkProps) => {
	return isInLink(href) ? (
		<RouterLink to={href}>{children}</RouterLink>
	) : (
		<ThemeUILink href={href}>{children}</ThemeUILink>
	);
};

export default Link;
