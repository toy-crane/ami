/** @jsxRuntime classic */
/** @jsx jsx */
import { Label, Input, Heading, Button, Box, Text, jsx } from "theme-ui";

type ActivateUserPropTypes = {
	onSubmit: () => void;
	register: () => void;
	errors: any;
};

const ActivateUser: React.FC<ActivateUserPropTypes> = ({
	onSubmit,
	register,
	errors,
}) => {
	return (
		<Box>
			<Box mb={4}>
				<Heading as="h1">추가 정보 입력하기</Heading>
				<Text variant="subTitle">
					회원 가입을 위해 이름과 휴대폰 번호를 입력해 주세요.
				</Text>
			</Box>
			<Box as="form" onSubmit={onSubmit} mb={2}>
				<Label htmlFor="name">이름</Label>
				<Input type="text" name="name" ref={register} />
				<p>{errors.name?.message}</p>
				<Label htmlFor="mobile">휴대폰 번호</Label>
				<Input type="text" name="mobile" ref={register} />
				<p>{errors.mobile?.message}</p>
				<Button>계속하기</Button>
			</Box>
		</Box>
	);
};

export default ActivateUser;
