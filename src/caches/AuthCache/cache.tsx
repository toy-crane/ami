import { makeVar } from "@apollo/client";

type AccountInfo = {
	id: number | null;
	email: string | null;
	avatar: string | null | undefined;
	githubUrl: string | null | undefined;
	name: string | null | undefined;
	isLoggedIn: boolean;
	loading: boolean;
	isActive: boolean;
	isError: boolean;
	status: "SIGN_UP" | "ACTIVATED" | "ACCOUNT_REGISTERED" | null;
};

const defaultAccountInfo: AccountInfo = {
	email: null,
	id: null,
	avatar: null,
	githubUrl: null,
	name: null,
	isActive: false,
	isLoggedIn: false,
	loading: true,
	isError: false,
	status: null,
};

const accessTokenCache = makeVar<null | string>(null);
const accountInfoCache = makeVar<AccountInfo>(defaultAccountInfo);

export { accountInfoCache, accessTokenCache, defaultAccountInfo };
