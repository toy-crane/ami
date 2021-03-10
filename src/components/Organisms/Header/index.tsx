/** @jsxRuntime classic */
/** @jsx jsx */
import Logo from "../../Atoms/Logo";
import { Flex, jsx } from "theme-ui";
import { ICONS } from "../../Atoms/Icon/constants";
import { Button } from "components";

const Header = () => (
	<Flex
		sx={{
			py: 3,
			width: "100%",
			alignItems: "center",
			justifyContent: "space-between",
		}}
	>
		<Logo href="/" />
		<ul sx={{ display: ["flex", "none"], listStyle: "none" }}>
			<li>
				<Button icon={ICONS.menu} iconSize={24} variant="icon"></Button>
			</li>
		</ul>
		<ul
			sx={{
				display: ["none", "flex"],
				listStyle: "none",
				"& > li:not(:last-child)": {
					marginRight: 2,
				},
			}}
		>
			<li>
				<Button href="/login" variant="primary">
					로그인
				</Button>
			</li>
			<li>
				<Button href="/sign-up" variant="secondary">
					회원가입
				</Button>
			</li>
		</ul>
	</Flex>
);

export default Header;
