/** @jsxRuntime classic */
/** @jsx jsx */
import { Link as ThemeUILink, jsx } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
}

const isInLink = (href: string) => (href.startsWith("/") ? true : false);

const Link: React.FC<LinkProps> = ({ href, onClick, children }: LinkProps) => {
	return href ? (
		isInLink(href) ? (
			<RouterLink to={href} sx={{ variant: "styles.a" }}>
				{children}
			</RouterLink>
		) : (
			<ThemeUILink href={href}>{children}</ThemeUILink>
		)
	) : (
		<ThemeUILink onClick={onClick}>{children}</ThemeUILink>
	);
};

export default Link;
