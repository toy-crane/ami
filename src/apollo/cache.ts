import { makeVar } from "@apollo/client";

type temporaryUserType = {
	email: string | null;
};

export const temporaryUserVar = makeVar<temporaryUserType>({
	email: null,
});
