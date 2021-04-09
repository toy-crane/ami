import { Theme } from "@theme-ui/css";
import ButtonVariant from "./ButtonVariant";
import FontVariant from "./FontVariant";
import gridVariant from "./gridVariant";

const imageVariant = {
	mainLogo: {
		width: 40 * 4,
		height: 40,
		borderRadius: 99999,
	},
	avatar: {
		borderRadius: 99999,
		display: "block",
	},
};

const theme: Theme = {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	breakpoints: ["40em"],
	sizes: {
		// 태블릿 양쪽 마진 확보
		container: 1024 + 32,
		smallContainer: 400 + 32,
		descContainer: 600 + 32,
	},
	fonts: {
		body:
			"-apple-system, BlinkMacSystemFont, Bazier Square, Noto Sans KR, Segoe UI, Apple SD Gothic Neo, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
		heading: "inherit",
	},
	images: imageVariant,
	grids: gridVariant,
	buttons: ButtonVariant,
	badges: {
		primary: {
			color: "background",
			bg: "primary50",
			fontSize: 1,
			paddingX: 1,
		},
		secondary: {
			color: "background",
			bg: "secondary50",
			fontSize: 1,
			paddingX: 1,
		},
		warning: {
			color: "background",
			bg: "warning50",
			fontSize: 1,
			paddingX: 1,
		},
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 40, 56, 72],
	fontWeights: {
		body: 400,
		subTitle: 600,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.6,
		subTitle: 1.5,
	},
	text: {
		default: {
			color: "text",
			fontSize: [1, 2],
		},
		heading: {
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
		},
		subTitle: {
			fontFamily: "body",
			lineHeight: "subTitle",
			fontWeight: "subTitle",
		},
		body: {
			fontFamily: "body",
			lineHeight: "body",
			fontWeight: "body",
		},
		caption: {
			color: "alert50",
			fontSize: 1,
		},
		pageTitle: {
			fontSize: 6,
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
		},
	},
	colors: {
		text: "#000",
		subText: "#666666",
		background: "#ffffff",
		muted: "#f6f6f6",
		black: "#1A1A1A",
		gray100: "#162637",
		gray80: "#1F224B",
		gray60: "#A1A1A1",
		gray40: "#C7C7C7",
		gray05: "#E4E4E4",
		gray0: "#F9FAFB",
		primary: "#3221BF",
		primary50: "#3F29EE",
		primary20: "#6554F2",
		primary10: "#8C7FF5",
		primary05: "#9F94F7",
		primary0: "#C5BFFA",
		secondary100: "#04BD8D",
		secondary50: "#06D19C",
		secondary05: "#38DAB0",
		warning100: "#FDB431",
		warning50: "#FDC35A",
		warning05: "#FED283",
		alert100: "#C8191F",
		alert50: "#E13338",
		alert05: "#EF8E91",
	},
	styles: {
		...FontVariant,
		root: {
			fontFamily: "body",
			lineHeight: "body",
			fontWeight: "body",
		},
		img: {
			maxWidth: "100%",
		},
		ul: {
			margin: 0,
			padding: 0,
			listStyleType: "none",
		},
		a: {
			display: "inline-block",
			textDecoration: "none",
			color: "text",
			"&:hover": {
				color: "primary",
				cursor: "pointer",
			},
		},
	},
	forms: {
		input: {
			"&:focus": {
				borderColor: "primary",
				boxShadow: (t) => `0 0 0 1px ${t.colors?.primary}`,
				outline: "none",
			},
		},
		invalidInput: {
			borderColor: "alert100",
			"&:focus": {
				boxShadow: (t) => `0 0 0 1px ${t.colors?.alert100}`,
				outline: "none",
			},
		},
	},
};
export default theme;
