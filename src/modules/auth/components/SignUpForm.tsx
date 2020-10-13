import React from "react";

type SignUpFormProps = {
	onSubmit: () => void;
	register: () => void;
	validationErrors: any;
};

const SignUpForm = ({
	onSubmit,
	register,
	validationErrors,
}: SignUpFormProps) => {
	return (
		<>
			<form onSubmit={onSubmit}>
				<div>
					<label>email</label>
					<input type="text" name="email" ref={register} />
					<p>{validationErrors.email?.message}</p>
				</div>
				<div>
					<label>username</label>
					<input type="text" name="username" ref={register} />
					<p>{validationErrors.username?.message}</p>
				</div>
				<div>
					<label>name</label>
					<input name="name" ref={register} />
					<p>{validationErrors.name?.message}</p>
				</div>
				<div>
					<label>password</label>
					<input name="password" type="password" ref={register} />
					<p>{validationErrors.password?.message}</p>
				</div>
				<input type="submit" />
			</form>
		</>
	);
};

export default SignUpForm;
