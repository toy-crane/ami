/** @jsx jsx */
import { addDecorator } from "@storybook/react";
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../src/Styles/Theme";
import StoryRouter from "storybook-react-router";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";

// theme provider 사용하기
addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
// react router 사용
addDecorator(StoryRouter());
// apollo cache 사용하기
addDecorator((story) => (
	<ApolloProvider client={client}>{story()}</ApolloProvider>
));
