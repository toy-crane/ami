/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ICONS, IconSet } from "./constants";

interface StyledIconProps {
	icon: ICONS;
	size?: number;
}

export interface IconProps extends StyledIconProps {
	color?: string;
	onClick?: () => void;
	mr?: number;
	ml?: number;
}

const StyledIcon = ({ size, icon }: StyledIconProps) => (
	<svg
		width={size ? size : 20}
		height={size ? size : 20}
		viewBox={IconSet[icon].viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d={IconSet[icon].path}
			fill={IconSet[icon].fill || "currentColor"}
			fillRule={IconSet[icon].fillRule}
			clipRule={IconSet[icon].clipRule}
		/>
	</svg>
);

const Icon: React.FC<IconProps> = ({
	size,
	icon,
	color,
	mr,
	ml,
	onClick,
}: IconProps) => {
	return (
		<span
			onClick={onClick}
			sx={{
				display: "inline-flex",
				justifyContent: "center",
				alignItems: "center",
				lineHeight: 0,
				cursor: onClick ? "pointer" : "default",
				color: color,
				mr,
				ml,
			}}
		>
			<StyledIcon icon={icon} size={size} />
		</span>
	);
};

export default Icon;
