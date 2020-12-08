/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Heading, Text } from "theme-ui";
import Container from "../Layout/Container";
import React from "react";

const Footer: React.FC = () => {
	return (
		<footer
			sx={{
				width: "100%",
				py: 3,
				backgroundColor: "brightenGray",
			}}
		>
			<Container>
				<Flex
					sx={{
						flexDirection: "column",
					}}
				>
					<Heading as="h4" my={3}>
						(주)codepot company
					</Heading>
					<Text my={2}>
						사업자 등록번호 : 123-45-67890 | 대표 : 김한울
						<br />
						06236 서울특별시 강남구 테헤란로 라이언 빌딩
					</Text>
				</Flex>
			</Container>
		</footer>
	);
};

export default Footer;
