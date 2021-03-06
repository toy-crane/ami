import React from "react";
import { Link as ThemeUILink } from "theme-ui";
import { Link as RLink } from "react-router-dom";

type LinkProps = OuterLinkProps | InnerLinkProps;
interface OuterLinkProps {
	href: string;
	children?: React.ReactNode;
}

interface InnerLinkProps {
	to: string;
	children?: React.ReactNode;
}

function instanceOfOLP(props: LinkProps): props is OuterLinkProps {
	return "href" in props;
}

const Link = (props: LinkProps) => {
	if (instanceOfOLP(props)) {
		return <ThemeUILink href={props.href}>{props.children}</ThemeUILink>;
	} else {
		return (
			<RLink to={props.to} style={{ textDecoration: "none", color: "inherit" }}>
				{props.children}
			</RLink>
		);
	}
};

export default Link;
