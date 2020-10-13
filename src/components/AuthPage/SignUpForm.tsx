import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

type SignUpInputs = {
	email: string;
	username: string;
	name: string;
	password: string;
};

const SignUpForm = () => {
	const { register, handleSubmit, errors } = useForm<SignUpInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = handleSubmit((data: SignUpInputs) => console.log(data));
	return (
		<>
			<form onSubmit={onSubmit}>
				<div>
					<label>email</label>
					<input type="text" name="email" ref={register} />
					<p>{errors.email?.message}</p>
				</div>
				<div>
					<label>username</label>
					<input type="text" name="username" ref={register} />
					<p>{errors.username?.message}</p>
				</div>
				<div>
					<label>name</label>
					<input name="name" ref={register} />
					<p>{errors.name?.message}</p>
				</div>
				<div>
					<label>password</label>
					<input name="password" type="password" ref={register} />
					<p>{errors.password?.message}</p>
				</div>
				<input type="submit" />
			</form>
		</>
	);
};

export default SignUpForm;
