import * as yup from "yup";

const nameValidator = yup
	.string()
	.min(2, "이름은 최소 2글자 이상입니다.")
	.max(20, "이름은 최대 20글자까지 입니다.")
	.required();

const mobileValidator = yup
	.string()
	.min(10, "휴대폰 번호가 잘못 되었습니다.")
	.required()
	.matches(
		/^(?:(010\d{4})|(01[1|6|7|8|9]\d{3,4}))(\d{4})$/,
		"휴대폰 번호가 잘못 되었습니다."
	);

export { nameValidator, mobileValidator };
