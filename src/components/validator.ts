import * as yup from "yup";

const nameValidator = yup
	.string()
	.required("이름을 입력해 주세요.")
	.min(2, "이름은 최소 2글자 이상입니다.")
	.max(20, "이름은 최대 20글자까지 입니다.");

const mobileValidator = yup
	.string()
	.required("휴대폰 번호를 입력해 주세요.")
	.matches(
		/^(?:(010[-]?\d{4})|(01[1|6|7|8|9][-]?\d{3,4}))([-]?\d{4})$/,
		"휴대폰 번호가 잘못 되었습니다."
	)
	.max(13, "휴대폰 번호가 잘못 되었습니다.");

const bankNameValidator = yup.string().required("은행 이름을 선택해 주세요.");

const bankAccountValidator = yup
	.string()
	.required("계좌 번호를 입력해 주세요.");

export {
	nameValidator,
	mobileValidator,
	bankNameValidator,
	bankAccountValidator,
};
