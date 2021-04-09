/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx, Text, Box, Flex } from "theme-ui";
import { ChallangeBanner, Button, Icon, Heading } from "components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ICONS } from "components/Atoms/Icon/constants";

const TransferGuideSection = () => (
	<Grid sx={{ gap: [3, 4] }}>
		<Grid sx={{ gap: 3 }}>
			<Heading variant="sectionTitle">신청 완료(입금 대기)</Heading>
			<ChallangeBanner color="black" />
		</Grid>
		<Box>
			<Text>입금 계좌</Text>
			<Flex>
				<Heading variant="sectionSubTitle">
					카카오뱅크 3333-09-1840091 김한울
				</Heading>
				<CopyToClipboard text="3333-09-1840091 카카오뱅크">
					<Icon icon={ICONS.copy} size={24} ml={2}></Icon>
				</CopyToClipboard>
			</Flex>
		</Box>
		<Box>
			<Text>입금 하실 금액</Text>
			<Heading variant="sectionSubTitle" color="gray40">
				105,000원
			</Heading>
		</Box>
		<Box>
			<Text>입금 가능 기한</Text>
			<Heading variant="sectionSubTitle" color="gray40">
				2021.03.10 24:00
			</Heading>
		</Box>
		<Text color="alert50">
			입금 확인은 최대 1일이 소요될 수 있습니다. <br />
			입금이 마감되는 순서대로 챌린지 신청이 마감되오니, 입금이 늦어 챌린지
			신청이 철회 되지 않게 주의해주세요!
		</Text>
		<Flex sx={{ justifyContent: ["stretch", "flex-end"] }}>
			<Button width={["100%", "400px"]} href="/mypage">
				입금 완료
			</Button>
		</Flex>
	</Grid>
);

export default TransferGuideSection;
