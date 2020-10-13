import React from "react";
import SignUpForm from "../components/SignUpForm";
import { useForm } from "react-hook-form";

type SignUpInputs = {
	email: string;
	username: string;
	name: string;
	password: string;
};

const SignUpFormContainer = () => {
	const { register, handleSubmit, errors } = useForm<SignUpInputs>();
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
