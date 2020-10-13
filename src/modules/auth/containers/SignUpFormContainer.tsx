import React from "react";
import SignUpForm from "../components/SignUpForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignUpInputs = {
	email: string;
	username: string;
	name: string;
	password: string;
};

const schema = yup.object().shape({
	email: yup.string().email("유효한 이메일 주소가 아닙니다.").required(),
	username: yup
		.string()
		.min(6, "닉네임은 최소 6글자 이상이여야 합니다.")
		.max(20, "닉네임은 최대 20글자입니다.")
		.required(),
	name: yup
		.string()
		.min(2, "이름은 최소 2글자 이상입니다.")
		.max(20, "이름은 최대 20글자까지 입니다.")
		.required(),
	password: yup
		.string()
		.min(10, "비밀번호는 최소 10글자 이상입니다.")
		.max(256, "비밀번호는 최대 256글자까지 입니다.")
		.required(),
});

const SignUpFormContainer = () => {
	const { register, handleSubmit, errors } = useForm<SignUpInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = handleSubmit((data: SignUpInputs) => console.log(data));

	return (
		<SignUpForm
			onSubmit={onSubmit}
			register={register}
			validationErrors={errors}
		></SignUpForm>
	);
};

export default SignUpFormContainer;