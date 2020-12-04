import theme from "@theme-ui/preset-base";

export default {
	...theme,
	fontSizes: [12, 14, 16, 24, 32, 48, 64],
	breakpoints: ["40em", "52em", "64em"],
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	sizes: {
		container: 1024,
	},
	fonts: {
		body:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		heading:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		monospace:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
};
