const LOCAL_STORAGE_KEY = "token";

const get = () => {
	return localStorage.getItem(LOCAL_STORAGE_KEY);
};

const save = (token: string) => {
	return localStorage.setItem(LOCAL_STORAGE_KEY, token);
};

const remove = () => {
	return localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export default { get, save, remove };
