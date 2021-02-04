import { ThemeUIStyleObject } from "theme-ui";
const ButtonVariant: Record<string, ThemeUIStyleObject> = {
	primary: {
		color: "background",
		bg: "primary50",
		"&:hover": {
			bg: "primary100",
		},
		cursor: "pointer",
	},
	secondary: {
		color: "background",
		bg: "secondary50",
		cursor: "pointer",
		"&:hover": {
			bg: "secondary100",
		},
	},
	icon: {
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
		bg: "#333333",
		cursor: "pointer",
		outlineColor: "black",
		"&:hover": {
			bg: "black",
			outlineColor: "black",
		},
	},
};
export default ButtonVariant;
