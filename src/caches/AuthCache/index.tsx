import React from "react";

interface AuthCacheProviderProps {
	children: React.ReactElement;
}

const AuthCacheProvider = ({ children }: AuthCacheProviderProps) => {
	return <>{children}</>;
};

export default AuthCacheProvider;
