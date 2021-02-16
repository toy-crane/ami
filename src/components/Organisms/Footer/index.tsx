import React from "react";
import { Flex, Heading, Text } from "theme-ui";
import Logo from "../../Atoms/Logo";
const Footer = () => (
	<Flex bg="gray100" sx={{ flexDirection: "column", width: "100%" }}>
		<Heading variant="styles.h8" color="white" mb="2">
			주식회사 코드팟 컴퍼니
		</Heading>
		<Text variant="styles.bodySmall" color="white" mb="4">
			06236 서울특별시 강남구 테헤란로 라이언 빌딩, 대표자: 김한울
			<br /> 사업자 등록 번호: 123-456-789
			<br /> 개인정보보호책임자: 김한울,
			<br /> 전화번호:02-1111-1111,
			<br />
			고객센터: codepot-help@gmail.com
		</Text>
		<Flex sx={{ flexDirection: ["column", "row"] }}>
			<Logo color="white" />
			<Text
				variant="styles.bodySmall"
				color="white"
				ml={[0, 2]}
				sx={{ alignSelf: ["none", "center"] }}
			>
				Copyright 2021 code pot, All Right reserved.
			</Text>
		</Flex>
	</Flex>
);

export default Footer;
