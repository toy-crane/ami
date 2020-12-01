import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidator, mobileValidator } from "../validation/schema";
import { useActivateUserMutation } from "../../../types/graphql-types";
import { useHistory } from "react-router-dom";

export const schema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface ActivateUserFormInputs {
	mobile: string;
	name: string;
}

const ActivateUser = () => {
	const { register, handleSubmit, errors } = useForm<ActivateUserFormInputs>({
		resolver: yupResolver(schema),
	});
	const [activateUser, { data }] = useActivateUserMutation();
	const onSubmit = (data: ActivateUserFormInputs) => {
		activateUser({ variables: data });
	};
	const history = useHistory();

	useEffect(() => {
		if (data) {
			history.push("/");
		}
	}, [data, history]);

	return (
		<div>
			회원 가입을 가입을 완료하기 위해 아래의 정보가 필요합니다.
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
		</div>
	);
};

export default ActivateUser;
