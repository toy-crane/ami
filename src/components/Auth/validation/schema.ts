import * as yup from "yup";

const userNameValidator = yup
	.string()
	.min(6, "닉네임은 최소 6글자 이상이여야 합니다.")
	.max(20, "닉네임은 최대 20글자입니다.")
	.required();

const nameValidator = yup
	.string()
	.min(2, "이름은 최소 2글자 이상입니다.")
	.max(20, "이름은 최대 20글자까지 입니다.")
	.required();

const passwordValidator = yup
	.string()
	.min(10, "비밀번호는 최소 10글자 이상입니다.")
	.max(256, "비밀번호는 최대 256글자까지 입니다.")
	.required();

const emailValidator = yup
	.string()
	.email("유효한 이메일 주소가 아닙니다.")
	.required();

export const signUpSchema = yup.object().shape({
	email: emailValidator,
	username: userNameValidator,
	name: nameValidator,
	password: passwordValidator,
});

export const signInSchema = yup.object().shape({
	email: emailValidator,
	password: passwordValidator,
});
