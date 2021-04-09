/** @jsxRuntime classic */
/** @jsx jsx */
import { Grid, jsx, Heading, Text, Box, Flex } from "theme-ui";
import { ChallangeBanner, Button, Icon } from "components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ICONS } from "components/Atoms/Icon/constants";

const TransferGuideSection = () => (
	<Grid sx={{ gap: [3, 4] }}>
		<Grid sx={{ gap: 3 }}>
			<Heading variant="styles.h4">신청 완료(입금 대기)</Heading>
			<ChallangeBanner color="black" />
		</Grid>
		<Box>
			<Heading variant="styles.subtitle" color="gray40">
				입금 계좌
			</Heading>
			<Flex>
				<Text variant="styles.bodyMedium" sx={{ marginRight: 2 }}>
					카카오뱅크 3333-09-1840091 김한울
				</Text>
				<CopyToClipboard text="3333-09-1840091 카카오뱅크">
					<Icon icon={ICONS.copy} size={24}></Icon>
				</CopyToClipboard>
			</Flex>
		</Box>
		<Box>
			<Heading variant="styles.subtitle" color="gray40">
				입금 하실 금액
			</Heading>
			<Text variant="styles.bodyMedium">105,000원</Text>
		</Box>
		<Box>
			<Heading variant="styles.subtitle" color="gray40">
				입금가능 기한
			</Heading>
			<Text variant="styles.bodyMedium">2021.03.10 24:00</Text>
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
