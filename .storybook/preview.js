/** @jsx jsx */
import { addDecorator } from "@storybook/react";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../src/Styles/Theme";
import StoryRouter from "storybook-react-router";

// theme provider 사용하기
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
// react router 사용
addDecorator(StoryRouter());
