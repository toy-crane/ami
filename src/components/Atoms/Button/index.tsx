/** @jsxRuntime classic */
/** @jsx jsx */
import { Link } from "components";
import { useHistory } from "react-router-dom";
import {
	jsx,
	Button as ThemeUIButton,
	ButtonProps as ThemeUIButtonProps,
} from "theme-ui";
import Icon from "../Icon";
import { IconProps } from "../Icon/index";

export interface ButtonProps extends ThemeUIButtonProps {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	href?: string;
}
export interface LinkButtonProps extends ButtonProps {
	route: string;
}
export interface IconButtonProps extends ButtonProps, IconProps {}

const Button: React.FC<ButtonProps> = ({ href, ...props }: ButtonProps) => {
	let history = useHistory();
	if (href) {
		return (
			<ThemeUIButton
				{...props}
				onClick={() => history.push(href)}
			></ThemeUIButton>
		);
	} else {
		return <ThemeUIButton {...props}>{props.children}</ThemeUIButton>;
	}
};

const IconButton = (props: IconButtonProps) => {
	return (
		<Button {...props} variant="icon">
			<Icon {...props} icon={props.icon}></Icon>
		</Button>
	);
};

export default Button;
export { IconButton };
