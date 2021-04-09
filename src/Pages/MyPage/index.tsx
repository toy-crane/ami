/** @jsxRuntime classic */
/** @jsx jsx */
import { MyPageSection } from "components";
import { jsx } from "theme-ui";
import MyPageTemplate from "./templates";

const MyPage = () => {
	return (
		<MyPageTemplate content={<MyPageSection></MyPageSection>}></MyPageTemplate>
	);
};

export default MyPage;
