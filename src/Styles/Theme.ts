import { Theme } from "@theme-ui/css";

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
	sizes: {
		container: 1024,
	},
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: "inherit",
		monospace: "Menlo, monospace",
	},
	images: imageVariant,
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		text: "#000",
		subText: "#666666",
		background: "#fff",
		primary: "#166AF4",
		darkenPrimary: "#2556BC",
		secondary: "#30c",
		muted: "#f6f6f6",
		gray: "#E6E6E6",
	},
	buttons: {
		primary: {
			color: "background",
			bg: "primary",
			"&:hover": {
				bg: "darkenPrimary",
			},
			cursor: "pointer",
		},
		secondary: {
			color: "subText",
			bg: "background",
			cursor: "pointer",
		},
	},
	styles: {
		nav: {
			color: "primary",
			textDecoration: "none",
		},
		root: {
			fontFamily: "body",
			lineHeight: "body",
			fontWeight: "body",
		},
		h1: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 5,
		},
		h2: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 4,
		},
		h3: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 3,
		},
		h4: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 2,
		},
		h5: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 1,
		},
		h6: {
			color: "text",
			fontFamily: "heading",
			lineHeight: "heading",
			fontWeight: "heading",
			fontSize: 0,
		},
		p: {
			color: "text",
			fontFamily: "body",
			fontWeight: "body",
			lineHeight: "body",
		},
		a: {
			color: "primary",
		},
		pre: {
			fontFamily: "monospace",
			overflowX: "auto",
			code: {
				color: "inherit",
			},
		},
		code: {
			fontFamily: "monospace",
			fontSize: "inherit",
		},
		table: {
			width: "100%",
			borderCollapse: "separate",
			borderSpacing: 0,
		},
		th: {
			textAlign: "left",
			borderBottomStyle: "solid",
		},
		td: {
			textAlign: "left",
			borderBottomStyle: "solid",
		},
		img: {
			maxWidth: "100%",
		},
	},
};
export default theme;
