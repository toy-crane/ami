export default {
	fontSizes: [12, 14, 16, 24, 32, 48, 64],
	breakpoints: ["40em", "52em", "64em"],
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	colors: {
		primary: "#f6f6ff",
		gray: "#f6f6ff",
		something: "#FF0000",
	},
	font: {
		body:
			"-apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
		heading:
			"-apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
		monospace:
			"-apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.25,
	},
	buttons: {
		primary: {
			fontSize: 2,
			fontWeight: "bold",
			color: "background",
			bg: "primary",
			borderRadius: "default",
		},
		outline: {
			variant: "buttons.primary",
			color: "primary",
			bg: "transparent",
			boxShadow: "inset 0 0 2px",
		},
		secondary: {
			variant: "buttons.primary",
			color: "background",
			bg: "secondary",
		},
	},
	variants: {
		link: {
			color: "red",
		},
		nav: {
			fontSize: 1,
			fontWeight: "bold",
			display: "inline-block",
			p: 2,
			color: "inherit",
			textDecoration: "none",
			":hover,:focus,.active": {
				color: "primary",
			},
		},
	},
};
