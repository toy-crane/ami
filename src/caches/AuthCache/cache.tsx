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
	// 환급 계좌 등록 여부
	hasRBankAccount: boolean;
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
	hasRBankAccount: false,
};

const accessTokenCache = makeVar<null | string>(null);
const accountInfoCache = makeVar<AccountInfo>(defaultAccountInfo);

export { accountInfoCache, accessTokenCache, defaultAccountInfo };
