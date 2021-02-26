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
		width: 36,
		height: 36,
		borderRadius: 99999,
		display: "block",
	},
};

const theme: Theme = {
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	breakpoints: ["40em"],
	sizes: {
		container: 1024,
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
		},
		secondary: {
			color: "background",
			bg: "secondary50",
		},
		warning: {
			color: "background",
			bg: "warning50",
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
		heading: 1.5,
		subTitle: 1.6,
	},
	text: {
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
	},
	colors: {
		text: "#000",
		subText: "#666666",
		background: "#ffffff",
		primary: "#166AF4",
		secondary: "#30c",
		muted: "#f6f6f6",
		brightenGray: "#F9FAFB",
		gray: "#E6E6E6",
		darkenGray: "#a2a7ab",
		gray100: "#1A1A1A",
		gray80: "#656565",
		gray60: "#A1A1A1",
		gray40: "#C7C7C7",
		gray05: "#E4E4E4",
		gray0: "#F9FAFB",
		primary100: "#3221BF",
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
		a: {
			textDecoration: "none",
			color: "text",
		},
	},
};
export default theme;
