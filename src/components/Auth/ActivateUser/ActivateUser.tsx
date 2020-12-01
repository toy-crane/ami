import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidator, mobileValidator } from "../validation/schema";

export const schema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface IFormInputs {
	mobile: string;
	name: string;
}

const ActivateUser = () => {
	const { register, handleSubmit, errors } = useForm<IFormInputs>({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data: IFormInputs) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="name">name</label>
				<input type="text" name="name" ref={register} />
				<p>{errors.name?.message}</p>
			</div>
			<div>
				<label htmlFor="mobile">mobile</label>
				<input type="text" name="mobile" ref={register} />
				<p>{errors.mobile?.message}</p>
			</div>
			<input type="submit" />
		</form>
	);
};

export default ActivateUser;
