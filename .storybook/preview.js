import { addDecorator } from "@storybook/react";
/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../src/Styles/Theme";

addDecorator((storyFn) => (
	<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
