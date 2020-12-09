import React from "react";

type ActivateUserPropTypes = {
	onSubmit: () => void;
	register: () => void;
	errors: any;
};

const ActivateUser: React.FC<ActivateUserPropTypes> = ({
	onSubmit,
	register,
	errors,
}) => {
	return (
		<div>
			회원 가입을 가입을 완료하기 위해 아래의 정보가 필요합니다.
			<form onSubmit={onSubmit}>
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
