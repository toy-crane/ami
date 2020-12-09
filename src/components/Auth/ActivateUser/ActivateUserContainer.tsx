import React, { useEffect } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidator, mobileValidator } from "../validation/schema";
import { useActivateUserMutation } from "../../../types/graphql-types";
import { useHistory } from "react-router-dom";
import ActivateUser from "./ActivateUser";

export const schema = yup.object().shape({
	name: nameValidator,
	mobile: mobileValidator,
});

interface ActivateUserFormInputs {
	mobile: string;
	name: string;
}

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
		<ActivateUser
			onSubmit={handleSubmit(onSubmit)}
			errors={errors}
			register={register}
		></ActivateUser>
	);
};

export default ActivateUserContainer;
