import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import ActivateUser from "./ActivateUser";
import AuthLayout from "../../../components/Layout/AuthLayout";
import { useActivateUserMutation } from "../../../types/graphql-types";
import { nameValidator, mobileValidator } from "../../../components/validator";

export const schema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface ActivateUserFormInputs {
	mobile: string;
	name: string;
}

//ToDo Form 이기 때문에 여기 있으면 안됨.
const ActivateUserContainer = () => {
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
		<AuthLayout>
			<ActivateUser
				onSubmit={handleSubmit(onSubmit)}
				errors={errors}
				register={register}
			></ActivateUser>
		</AuthLayout>
	);
};

export default ActivateUserContainer;
