/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import ActivateTemplate from "./templates";
import { ActivationForm } from "components";
import { Heading } from "theme-ui";

const Activate = () => {
	return (
		<ActivateTemplate
			title={<Heading variant="pageTitle">추가 정보 입력하기</Heading>}
			content={<ActivationForm />}
		></ActivateTemplate>
	);
};

export default Activate;
