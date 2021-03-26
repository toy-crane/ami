/** @jsxRuntime classic */
/** @jsx jsx */
import { Link as ThemeUILink, jsx } from "theme-ui";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
	href?: string;
	children: React.ReactNode;
	onClick?: () => void;
	width?: string | string[];
}

const isInLink = (href: string) => (href.startsWith("/") ? true : false);

const Link: React.FC<LinkProps> = ({
	href,
	onClick,
	children,
	width,
}: LinkProps) => {
	const style = {
		variant: "styles.a",
		width: width,
	};
	return href && isInLink(href) ? (
		<RouterLink to={href} sx={style}>
			{children}
		</RouterLink>
	) : (
		<ThemeUILink onClick={onClick} href={href} sx={style}>
			{children}
		</ThemeUILink>
	);
};

export default Link;
