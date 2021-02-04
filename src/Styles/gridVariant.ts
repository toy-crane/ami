import { ThemeUIStyleObject } from "theme-ui";

const gridVariant: Record<string, ThemeUIStyleObject> = {
	mainLayout: {
		gridColumnGap: 3,
		gridRowGap: 4,
		gridTemplateColumns: ["repeat(6, 1fr)", "repeat(12, minmax(auto, 72px))"],
		px: 3,
		mx: [0, "auto"],
	},
};

export default gridVariant;
