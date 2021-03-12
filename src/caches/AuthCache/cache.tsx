import { makeVar } from "@apollo/client";

type AccountInfo = {
	id: number | null;
	email: string | null;
	avatar: string | null | undefined;
	githubUrl: string | null | undefined;
	name: string | null | undefined;
	isLoggedIn: boolean;
	loading: boolean;
};

const defaultAccountInfo: AccountInfo = {
	email: null,
	id: null,
	avatar: null,
	githubUrl: null,
	name: null,
	isLoggedIn: false,
	loading: false,
};

const accessTokenCache = makeVar<null | string>(null);
const accountInfoCache = makeVar<AccountInfo>(defaultAccountInfo);

export { accountInfoCache, accessTokenCache };
