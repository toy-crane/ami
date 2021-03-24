import { Button, Icon } from "components";
import { ICONS } from "components/Atoms/Icon/constants";
import React from "react";
import { useHistory } from "react-router";
import { Text } from "theme-ui";
import { Heading, Box, Flex } from "theme-ui";
import NotFoundTemplate from "./templates";

const NotFoundContent = () => {
	let history = useHistory();
	return (
		<Flex
			sx={{
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Heading variant="pageTitle" marginBottom={3}>
				404 Not Found.
			</Heading>
			<Box marginBottom={4}>
				<Icon icon={ICONS.warning} size={128} />
			</Box>
			<Text marginBottom={4} sx={{ textAlign: "center" }}>
				요청하신 페이지를 찾을 수 없습니다. <br />
				입력하신 주소가 정확한지 다시 한 번 확인해 주세요.
			</Text>
			<Button variant="primary" onClick={() => history.goBack()}>
				홈페이지로 돌아가기
			</Button>
		</Flex>
	);
};

const NotFound = () => {
	return <NotFoundTemplate notFound={<NotFoundContent />}></NotFoundTemplate>;
};

export default NotFound;
