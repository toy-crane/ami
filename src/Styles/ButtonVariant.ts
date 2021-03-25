import { ThemeUIStyleObject } from "theme-ui";

const ButtonVariant: Record<string, ThemeUIStyleObject> = {
	primary: {
		color: "background",
		bg: "primary50",
		"&:hover": {
			bg: "primary",
		},
		cursor: "pointer",
	},
	secondary: {
		color: "primary",
		bg: "background",
		borderColor: "primary50",
		border: "1px solid",
		cursor: "pointer",
		"&:hover": {
			bg: "primary0",
		},
	},
	icon: {
		color: "black",
		appearance: "none",
		bg: "transparent",
		border: 0,
		p: 1,
		m: 0,
		":focus": {
			outline: "2px solid",
		},
		":hover": {
			bg: "transparent",
			cursor: "pointer",
		},
	},
	github: {
		color: "white",
		bg: "gray80",
		cursor: "pointer",
		"&:hover": {
			outlineColor: "black",
			bg: "black",
		},
	},
};
export default ButtonVariant;
