/** @jsx jsx */
import { addDecorator } from "@storybook/react";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../src/Styles/Theme";

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
