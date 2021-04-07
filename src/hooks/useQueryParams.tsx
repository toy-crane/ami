const getQuery = () => {
	if (typeof window !== "undefined") {
		return new URLSearchParams(window.location.search);
	}
	return new URLSearchParams();
};

const getQueryStringVal = (key: string): string | null => {
	return getQuery().get(key);
};

const useQueryParams = (key: string, defaultVal?: string): string | null => {
	const value = getQueryStringVal(key) || defaultVal || null;
	return value;
};

export default useQueryParams;
