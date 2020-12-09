/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Button, Flex, Image, Text, Link } from "theme-ui";
import React from "react";

type GitHubButtonPropTypes = {
	text: string;
	url: string;
};

const GitHubButton: React.FC<GitHubButtonPropTypes> = ({
	text,
	url,
	...rest
}: GitHubButtonPropTypes) => {
	return (
		<Link {...rest} href={url} my={2}>
			<Button variant="github">
				<Flex sx={{ justifyContent: "center", alignItems: "center" }}>
					<Image src="/social/github-logo.svg" mx={2}></Image>
					<Text mx={2}>{text}</Text>
				</Flex>
			</Button>
		</Link>
	);
};

export default GitHubButton;
