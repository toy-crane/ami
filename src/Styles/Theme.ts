import { Theme } from "@theme-ui/css";
import { NONAME } from "dns";
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
		// 태블릿 양쪽 마진 확보
		container: 1024 + 32,
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
	},
	colors: {
		text: "#000",
		subText: "#666666",
		background: "#ffffff",
		muted: "#f6f6f6",
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
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
		a: {
			display: "inline-block",
			textDecoration: "none",
			color: "text",
			"&:hover": {
				color: "primary100",
			},
		},
	},
};
export default theme;
