import React, { useMemo } from "react";
import { useLogout } from "../../services/auth";
import { useGetMeQuery } from "../../types/graphql-types";
import Header from "./Header";

const HeaderContainer = () => {
	const { data, loading } = useGetMeQuery();
	const handleLogout = useLogout();
	const isLoggedIn = useMemo(() => data?.isLoggedIn || false, [data]);

	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<div>
			{data && (
				<Header
					email={data.me.email}
					isLoggedIn={isLoggedIn}
					handleLogout={handleLogout}
				/>
			)}
		</div>
	);
};

export default HeaderContainer;
