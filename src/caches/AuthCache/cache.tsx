import { makeVar } from "@apollo/client";

type AccountStatus = {
	userId: number | undefined;
	email: string | undefined;
};

const defaultAccountStatus: AccountStatus = {
	email: undefined,
	userId: undefined,
};

export default makeVar<AccountStatus>(defaultAccountStatus);
