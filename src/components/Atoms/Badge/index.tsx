/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Badge as ThemeUIBadge } from "theme-ui";

export interface BadgeProps {
	variant?: string;
}

const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
	return <ThemeUIBadge {...props}></ThemeUIBadge>;
};

export default Badge;
