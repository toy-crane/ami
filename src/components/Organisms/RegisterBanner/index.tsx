import { Button } from "components";
import React from "react";
import { Flex, Heading } from "theme-ui";

interface RegisterBannerProps {
	ChallangeId: number;
}

const RegisterBanner = ({ ChallangeId }: RegisterBannerProps) => (
	<Flex
		sx={{
			flexDirection: ["column", "row"],
			justifyContent: ["stretch", "space-between"],
			alignItems: ["stretch", "center"],
		}}
	>
		<Heading
			variant="styles.h7"
			sx={{
				display: ["none", "block"],
			}}
		>
			꾸준히 코딩하는 습관 만들기 프로젝트!
		</Heading>
		<Button href={`/register/${ChallangeId}`} width={["100%", "fit-content"]}>
			지금 바로 시작하기
		</Button>
	</Flex>
);

export default RegisterBanner;
